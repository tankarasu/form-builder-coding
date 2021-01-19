// importation nécessaires
import Vue from "vue";
import Vuex from "vuex";

// utilise Vuex via la fonction middleware 'use'
Vue.use(Vuex);

// export du Store pour qu'il soit accessible
export default new Vuex.Store({
  // l'état (state) de l'application à un instant T
  state: {
    // cette variable défini l'heure actuelle quand le composant est créé.
    currentTime: new Date(),
  },
  /** -- Mutations--
   * Enregistrer les mutations sur le store.
   * functions de type f(state,payload) à l'aide des commits
   */
  mutations: {

  },
  actions: {},
  modules: {},
  getters: {
    // avec ce getters on récupère la date actuelle
    // return implicite si notation ES6 sur 1 ligne
    thisTime: state => this.state.currentTime,
  },
});
