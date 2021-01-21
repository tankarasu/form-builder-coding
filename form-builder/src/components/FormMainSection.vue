<template>
  <div class="col-7">
    <form @submit.prevent="onSubmit()" class="row">
      <select name="select" id="test" v-model="selected">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>

      <input v-model="action" placeholder="urlAction" />
      <input v-model="id" placeholder="id" />
      <input v-model="classe" placeholder="class" />
      <input type="submit" value="Valider" />
    </form>
    <form action="" method="" class="" id="">
      <!-- affichage conditionnel du formulaire -->
      <div v-for="(item, index) in elementData" :key="index">
        <dynamic-tag :tagType="item.tagType" :content="item.text"></dynamic-tag>
      </div>
    </form>
  
    <div>
      <code
        >[ {{ containerData }}, {"elements":{{ elementData }}
        } ]
      </code>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DynamicTag from "./DynamicTag.vue";

export default {
  components: { DynamicTag },
  name: "FormMainSection",
  data() {
    return {
      // récupère la méthode du formulaire
      selected: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("addMethodAction", this.selected);
      console.log(this.containerData);
    },
  },

  // objet qu'on utilise comme une variable
  computed: {
    ...mapState(["containerData", "elementData"]),
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
  beforeUpdate() {
    console.log("updated from section");
  },
};

// CSS
// récupérer les données dans un JSON
// récuperer les données en copie
// afficher les données en JSON
// bootstrap avancé
// option : heure locale && heure de midi
</script>

<style scoped></style>

