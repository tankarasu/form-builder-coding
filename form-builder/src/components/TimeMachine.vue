<template>
  <div>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TimeMachine",
  computed: {
    // on décompose l'objet renvoyé par mapState
    ...mapState(["currentTime"]),
  },
  beforeCreate() {
    this.$store.dispatch("refreshCurrentTime");
  },
};
</script>

<style scoped></style>
