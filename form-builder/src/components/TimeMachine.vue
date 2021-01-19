<template>
  <div>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
console.log($store);

export default {
  name: "TimeMachine",
  computed: {
    // on décompose l'objet renvoyé par mapState
    ...mapState(["currentTime"]),
  },
};
</script>

<style scoped></style>
