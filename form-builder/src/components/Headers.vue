<template>
  <div>
    <h1 class="m-0">Form App<span class="point">.</span></h1>
    <router-link to="/" class="btn btn-outline-secondary">Form Builder</router-link>
    <router-link to="/krypto" class="btn btn-outline-secondary">Krypto Tendance</router-link>
  </div>
</template>

<script>
export default {
  name: "Headers",
  props: {},
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
}

a {
  margin-left: 50px;
}

.point {
  color: red;
  font-size: 75px;
}
</style>
