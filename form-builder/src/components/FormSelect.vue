<template>
  <div class="bg-dark col-3">
    <div class="testAdd bg-light" @click="addString">
      <button>Bouton</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormSelect",
  computed: mapState(["testData"]),
  methods: {
    addString() {
      this.$store.dispatch("addTestString", "hello");
      console.log(this.testData);
    },
  },
};
</script>

<style scoped></style>
