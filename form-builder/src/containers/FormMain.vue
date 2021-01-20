<template>
  <div>
    <div class="row">
      <form-select></form-select>
      <form-setup></form-setup>
      <form-main-section></form-main-section>
    </div>
    <form-footer></form-footer>
  </div>
</template>

<script>
import FormFooter from "../components/FormFooter.vue";
import FormMainSection from "../components/FormMainSection.vue";
import FormSelect from "../components/FormSelect.vue";
import FormSetup from "../components/FormSetup.vue";

import { mapState } from "vuex";

export default {
  components: {
    FormFooter,
    FormMainSection,
    FormSelect,
    FormSetup,
  },
computed: mapState(['testData']),

  beforeCreate() {
    
  },
};
</script>

<style scoped></style>
