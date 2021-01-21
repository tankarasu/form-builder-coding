<template>
  <div class="col-5">
    <select-card content="validate" tagType="button"></select-card>
    <select-card content="john" tagType="textarea"></select-card>
    <select-card content="moi" tagType="input"></select-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SelectCard from "./SelectCard.vue";

export default {
  components: { SelectCard },
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
