<template>
  <div class="ingComponent col-4">
    <div class="card">
      <img class="card-img-top" src="holder.js/100x180/" alt />
      <div class="card-body">
        <h4 class="card-title">{{ingProp.name}}</h4>
        <p class="card-text">{{ingProp.kCal}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ingComponent",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["ingProp"]
};
</script>



<style scoped>
</style>