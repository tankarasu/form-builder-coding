<template>
  <div id="app" class="container">
    <MainMenu></MainMenu>
    <router-view />
  </div>
</template>

<script>
import MainMenu from "../src/containers/MainMenu.vue";

export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
