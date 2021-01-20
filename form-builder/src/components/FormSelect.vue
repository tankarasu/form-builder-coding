<template>
  <div class="col-3">
    <!-- Le clic ajoute l'élément dans le store -->
    <div class="testAdd">
      <button>Bouton</button><span class="addBtn" @click="addBtn">+</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormSelect",
  computed: mapState(["elementData"]),
  methods: {
    addBtn() {
      this.$store.dispatch("addElementInfo", "Bouton");
      console.log(this.elementData);
    },
  },
};
</script>

<style scoped></style>
