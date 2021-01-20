<template>
  <div class="bg-info col-7">
    <form>
      <span class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitches"
        />
        <label class="custom-control-label" for="customSwitches">POST</label>
      </span>

      <input placeholder="urlAction" />
      <input placeholder="id" />
      <input placeholder="class" />
      <button>Valider</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormMainSection",
  computed: {},
};
</script>

<style scoped></style>
