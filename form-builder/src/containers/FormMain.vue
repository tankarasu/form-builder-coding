<template>
  <div>
    <div class="row m-0">
      <form-select></form-select>
      <form-main-section></form-main-section>
    </div>
  </div>
</template>

<script>
import FormMainSection from "../components/FormMainSection.vue";
import FormSelect from "../components/FormSelect.vue";

export default {
  components: {
    FormMainSection,
    FormSelect,
  },
};
</script>

<style scoped></style>
