<template>
  <div>
    <form-select></form-select>
    <form-setup></form-setup><form-main-section></form-main-section>
    <form-footer></form-footer>
  </div>
</template>

<script>
import FormFooter from "../components/FormFooter.vue";
import FormMainSection from "../components/FormMainSection.vue";
import FormSelect from "../components/FormSelect.vue";
import FormSetup from "../components/FormSetup.vue";

export default {
  components: {
    FormFooter,
    FormMainSection,
    FormSelect,
    FormSetup,
  },
};
</script>

<style scoped></style>
