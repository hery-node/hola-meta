import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import User from "../views/UserView.vue";

const routes = [
  { path: '/', name: 'user', component: User },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
