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

      <input v-model="action" placeholder="urlAction" />
      <input v-model="id" placeholder="id" />
      <input v-model="classe" placeholder="class" />
      <input type="submit" value="Valider" />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormMainSection",
  data() {
    return {
      actions: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.containerData);
    },
  },

  // objet qu'on utilise comme une variable
  computed: {
    ...mapState(["containerData"]),
    // pattern
    action: {
      get() {
        return this.containerData.action;
      },
      set(value) {
        // renvoi au store
        // commit une mutation
        this.$store.commit("addUrlAction", value);
      },
    },
    method: {
      get() {
        return this.containerData.method;
      },
      set(value) {
        return this.$store.commit("addMethodAction", value);
      },
    },
    classe: {
      get() {
        return this.containerData.classe;
      },
      set(value) {
        return this.$store.commit("addClassAction", value);
      },
    },
    id: {
      get() {
        return this.containerData.id;
      },
      set(value) {
        return this.$store.commit("addIdAction", value);
      },
    },
  },
};
</script>

<style scoped></style>
