<template>
  <div>
    <div class="row">
      <form-select></form-select>
      <form-main-section></form-main-section>
    </div>
    <form-footer></form-footer>
  </div>
</template>

<script>
import FormFooter from "../components/FormFooter.vue";
import FormMainSection from "../components/FormMainSection.vue";
import FormSelect from "../components/FormSelect.vue";

import { mapState } from "vuex";

export default {
  components: {
    FormFooter,
    FormMainSection,
    FormSelect,
  },
  computed: { ...mapState(["containerData", "elementData"]) },

  // beforeUpdate() {
  //   console.log("updated from main");
  // },
};
</script>

<style scoped></style>
