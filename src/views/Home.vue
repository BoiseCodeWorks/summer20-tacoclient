<template>
  <div class="home container-fluid">
    Taco Truck
    <form @submit.prevent="addTaco()">
      <div class="form-group">
        <label for></label>
        <input
          type="text"
          v-model="newTaco.name"
          name
          id
          class="form-control"
          placeholder
          aria-describedby="helpId"
        />
        <small id="helpId" class="text-muted">Name</small>
        <input
          type="text"
          v-model="newTaco.description"
          name
          id
          class="form-control"
          placeholder
          aria-describedby="helpId"
        />
        <small id="helpId" class="text-muted">Desc</small>
        <input
          type="number"
          v-model.number="newTaco.price"
          name
          id
          step=".01"
          class="form-control"
          placeholder
          aria-describedby="helpId"
        />
        <small id="helpId" class="text-muted">Price</small>
      </div>
      <button type="submit" class="btn btn-primary">Make Taco</button>
    </form>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>Tacos</h3>
    <div class="row">
      <TacoComponent v-for="taco in tacos" :key="taco.id" :tacoProp="taco"></TacoComponent>
    </div>
    <h3>Ingredients</h3>
    <div class="row">
      <ingComponent v-for="ing in ings" :key="ing.id" :ingProp="ing"></ingComponent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TacoComponent from "@/components/TacoComponent.vue";
import IngComponent from "@/components/IngComponent.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    TacoComponent,
    IngComponent
  },
  data() {
    return {
      newTaco: {}
    };
  },
  mounted() {
    this.getTacos();
    this.getIngs();
  },
  methods: {
    getTacos() {
      this.$store.dispatch("getTacos");
    },
    getIngs() {
      this.$store.dispatch("getIngs");
    },
    addTaco() {
      this.$store.dispatch("createTaco", this.newTaco);
    }
  },
  computed: {
    tacos() {
      return this.$store.state.tacos;
    },
    ings() {
      return this.$store.state.ings;
    }
  }
};
</script>
