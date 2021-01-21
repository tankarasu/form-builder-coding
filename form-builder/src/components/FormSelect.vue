<template>
  <div class="col-5 row">
    <select-card tagType="button" needContent="true"></select-card>
    <select-card tagType="textarea" needContent="false"></select-card>
    <select-card tagType="input" needContent="false"></select-card>
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
