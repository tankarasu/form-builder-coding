<template>
  <div class="bg-info col-7">
    <form @submit.prevent="onSubmit()">
      <span class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitches"
        />
        <label class="custom-control-label" for="customSwitches">POST</label>
      </span>

      <input v-model= "url" placeholder="urlAction" />
      <input placeholder="id" />
      <input placeholder="class" />
      <input type="submit" value="Valider" />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormMainSection",
  data(){
    return {url:""};
  },

  methods: {
    onSubmit(){
      console.log(this.data.url);
    }
  },

  computed: {
     ...mapState(["containerData"]),
  },
};
</script>

<style scoped></style>
