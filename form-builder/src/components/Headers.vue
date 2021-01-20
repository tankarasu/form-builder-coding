<template>
  <div>
    <h1>Form App</h1>
    <a href="/">Krypto-tendance</a>
    <router-link to="/home">Home</router-link>
    <router-link to="/pagea">page A</router-link>
    <router-link to="/pageb">page B</router-link>
    <router-link to="/pagec">page C</router-link>
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
