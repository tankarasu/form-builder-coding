<template>
  <header>
    <Headers></Headers>
    <TimeMachine></TimeMachine>
  </header>
</template>

<script>
import Headers from "../components/Headers.vue";
import TimeMachine from "../components/TimeMachine.vue";
import PageA from "../components/PageA.vue";

export default {
  components: {
    Headers,
    TimeMachine,
    PageA,
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
