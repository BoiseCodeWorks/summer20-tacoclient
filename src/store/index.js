import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let baseUrl = location.host.includes("localhost") ? "https://localhost:5001/" : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    tacos: [],
    ings: []
  },
  mutations: {
    setTacos(state, tacos) {
      state.tacos = tacos
    },
    setIngs(state, ings) {
      state.ings = ings
    }
  },
  actions: {
    async getTacos({ commit, dispatch }) {
      try {
        let res = await api.get("tacos")
        // console.log(res);
        commit("setTacos", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getIngs({ commit, dispatch }) {
      try {
        let res = await api.get("ingredients")
        console.log(res);
        commit("setIngs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createTaco({ commit, dispatch, state }, newTaco) {
      try {
        let res = await api.post("tacos", newTaco)
        let tacos = [...state.tacos, res.data]
        commit("setTacos", tacos)
      } catch (error) {
        console.error(error)
      }
    }

  },
  modules: {
  }
})
