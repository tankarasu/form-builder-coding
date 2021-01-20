<template>
  <div>
    <h1>Form App</h1>
    <router-link to="/">Form Builder</router-link>
    <router-link to="/krypto">Krypto Tendance</router-link>
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
</style>
