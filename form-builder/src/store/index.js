// importation nécessaires
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// utilise Vuex via la fonction middleware 'use'
Vue.use(Vuex);

// export du Store pour qu'il soit accessible
export default new Vuex.Store({
  // l'état (state) de l'application à un instant T
  state: {
    // cette propriété défini l'heure actuelle quand le composant est créé.
    currentTime: new Date(),
    // cette propriété sert à récupérer la liste des bitcoins à afficher
    urlGet:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false",
    kryptoData: {},
    testData: [], // TODO element in Json à renommer
    containerData: { action: "", method: "", classe: "", id: "", type: "form" },
    submitData: {},
  },
  /** -- Mutations--
   * Enregistrer les mutations sur le store.
   * functions de type f(state,payload) à l'aide des commits
   */
  mutations: {
    // faire une fonction qui rafraîchit l'heure à intervalle régulier
    refreshTime(state) {
      state.currentTime = new Date();
    },
    // récupère les données dans un tableau
    fetchData(state, data) {
      state.kryptoData = data;
    },
    // TODO fonction à renommer
    addTestData(state, value) {
      state.testData.push({ text: value });
    },
    // ajoute l'url à l'objet
    addUrlAction(state, value) {
      state.containerData.action = value;
    },
    // ajoute la method à l'objet
    addMethodAction(state, value) {
      state.containerData.method = value;
    },
    // ajout la classe à l'objet
    addClassAction(state, value) {
      state.containerData.classe = value;
    },
    // ajoute l'id à l'objet
    addIdAction(state, value) {
      state.containerData.id = value;
    },
  },
  // permet de commit les mutations
  actions: {
    refreshCurrentTime(context) {
      setInterval(() => context.commit("refreshTime"), 1000);
    },
    fetchTheKryptoData(context) {
      axios
        .get(context.state.urlGet)
        .then(res => {
          context.commit("fetchData", res.data);
        })
        .catch(err => console.log(err));
    },
    addTestString(context, data) {
      context.commit("addTestData", data);
    },
  },
  modules: {},
  getters: {
    // avec ce getters on récupère la date actuelle
    // return implicite si notation ES6 sur 1 ligne
    // thisTime: state => this.state.currentTime,
  },
});
