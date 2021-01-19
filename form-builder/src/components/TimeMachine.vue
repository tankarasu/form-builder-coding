<template>
  <div>
    <p>{{ currentTime }}</p>

    <p>{{ currentTime.getHours() }}</p>
    <p>{{ currentTime.getMinutes() }}</p>
    <p>{{ currentTime.getSeconds() }}</p>

    <div class="watch">
      <div class="face">
        <div class="needle hour"></div>
        <div class="needle minute"></div>
        <div class="needle second"></div>
      </div>
    </div>
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
    ...mapState(["currentTime","currentHours"]),
  },
  beforeCreate() {
    // le dispatch permet l'appel au refresh
    this.$store.dispatch("refreshCurrentTime");
  },
};
</script>

<style scoped>
.watch {
  width: 300px;
  height: 300px;
  border: 20px solid white;
  border-radius: 50%;
  margin: 80px auto 0 auto;
  position: relative;
  padding: 36px;
}

.face {
  position: relative;
  width: 100%;
  height: 100%;
}

.needle {
  position: absolute;
  top: 50%;
  width: 50%;
  height: 6px;
  transform-origin: 100%;
  transition: all 0.05s ease;
}

.hour {
  transform: rotate(0deg);
  background-color: black;

  width: 30% !important;
  right: 50%;
}

.minute {
  transform: rotate(90deg);
  width: 40% !important;
  background-color: black;

  right: 50%;
}

.second {
  width: 50% !important;
  background-color: red;

  right: 50%;
}
</style>
