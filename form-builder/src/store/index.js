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
  },
  /** -- Mutations--
   * Enregistrer les mutations sur le store.
   * functions de type f(state,payload) à l'aide des commits
   */
  mutations: {
    // faire une fonction qui rafraîchit l'heure à intervalle régulier
    refreshTime(state) {
      setInterval(() => {
        state.currentTime = new Date();
      }, 1000);
    },
    // TODO - besoin de remove Interval beforeDestroy ?
    fetchData(state) {
      axios
        .get(state.urlGet)
        .then(res => {
          state.kryptoData = res.data;
          console.log(state.kryptoData);
        })
        .catch(err => console.log(err));
    },
  },
  // permet de commit les mutations
  actions: {
    refreshCurrentTime(context) {
      context.commit("refreshTime");
    },
    fetchTheKryptoData(context) {
      context.commit("fetchData");
    },
  },
  modules: {},
  getters: {
    // avec ce getters on récupère la date actuelle
    // return implicite si notation ES6 sur 1 ligne
    // thisTime: state => this.state.currentTime,
  },
});
