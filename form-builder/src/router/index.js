// import nécessaire pour le fonctionnement
import Vue from "vue";
import VueRouter from "vue-router";
// import module pour les rendus sur les liens
import KryptoMain from "../containers/KryptoMain.vue";
import FormMain from "../containers/FormMain.vue";

Vue.use(VueRouter);

const routes = [
  {
    // chemin relatif racine du projet
    path: "/",
    name: "FormMain",
    component: FormMain,
  },
  {
    path: "/krypto",
    component: KryptoMain,
  },
  // redirection si URL ne correspond à aucune citée
  {
    path: "/*",
    redirect: "/",
  },
];

const router = new VueRouter({
  // permet d'avoir un système d'historique et non de hash ex: /#/about
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
