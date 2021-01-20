import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageA from "../components/PageA.vue";

Vue.use(VueRouter);

const routes = [
  {
    // chemin relatif racine du projet
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/pagea",
    component: PageA,
  },
  {
    path: "/pageb",
    component: require("../components/PageB.vue"),
  },
  {
    path: "/pagec",
    component: require("../components/PageC.vue"),
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
