<template>
  <header>
    <Headers></Headers>
    <TimeMachine></TimeMachine>
  </header>
</template>

<script>
import Headers from "../components/Headers.vue";
import TimeMachine from "../components/TimeMachine.vue";
// imports nécessaires pour l'affichage des différentes vues
import KryptoMain from "../containers/KryptoMain.vue";
import FormMain from "../containers/FormMain.vue";

export default {
  components: {
    Headers,
    TimeMachine,
    KryptoMain,
    FormMain,
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
}
</style>
