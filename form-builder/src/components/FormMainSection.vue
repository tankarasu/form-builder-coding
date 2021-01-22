<template>
  <div class="col-7">
    <form class=" m-1" id="Formulaire">
      <select
        name="select"
        id="test"
        v-model="selected"
        class=""
        @change="onChange()"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>

      <input v-model="action" placeholder="urlAction" class="" />
      <input v-model="id" placeholder="id" class="" />
      <input v-model="classe" placeholder="class" class="" />
    </form>
    <form action="" method="" class="" id="">
      <!-- affichage conditionnel du formulaire -->
      <div v-for="(item, index) in elementData" :key="index">
        <dynamic-tag
          :tagType="item.tagType"
          :content="item.text"
          :index="index"
          show="1"
        ></dynamic-tag>
      </div>
    </form>

    <div class="mt-4">
      <code
        >[ {{ containerData }}, {"elements":{{ elementData }}
        } ]
      </code>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import DynamicTag from "./DynamicTag.vue";

export default {
  components: { DynamicTag },
  name: "FormMainSection",
  data() {
    return {
      // récupère la méthode du formulaire
      selected: "GET",
    };
  },
  methods: {
    onChange() {
      this.$store.commit("addMethodAction", this.selected);
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

<style scoped>
#Formulaire {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
