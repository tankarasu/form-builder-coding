<template>
  <div>
    <p>
      <span>{{
        currentTime.getHours() < 10
          ? "0" + currentTime.getHours()
          : currentTime.getHours()
      }}</span>
      h
      <span>{{
        currentTime.getMinutes() < 10
          ? "0" + currentTime.getMinutes()
          : currentTime.getMinutes()
      }}</span>
      :
      <span>{{
        currentTime.getSeconds() < 10
          ? "0" + currentTime.getSeconds()
          : currentTime.getSeconds()
      }}</span>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TimeMachine",
  data() {
    return {};
  },
  computed: {
    // on décompose l'objet renvoyé par mapState
    ...mapState(["currentTime"]),
  },
  beforeCreate() {
    // le dispatch permet l'appel au refresh
    this.$store.dispatch("refreshCurrentTime");
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
