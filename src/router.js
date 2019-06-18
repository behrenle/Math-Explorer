import Vue from "vue";
import Router from "vue-router";
import Calculator from "./views/Calculator.vue";
import Settings from "./views/Settings.vue";
import Manual from "./views/Manual.vue";
import About from "./views/About.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Calculator",
      component: Calculator
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/manual",
      name: "Manual",
      component: Manual
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
  ]
});
