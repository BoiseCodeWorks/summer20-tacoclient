<template>
  <div class="tacoComponent col-4">
    <div class="card">
      <img class="card-img-top" src="https://placehold.it/200x200" alt />
      <div class="card-body">
        <h4 class="card-title">{{tacoProp.name}}</h4>
        <p class="card-text">{{tacoProp.description}}</p>
        <small>
          <b>{{tacoProp.price}}</b>
        </small>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "tacoComponent",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["tacoProp"]
};
</script>


<style scoped>
</style>