import Vue from "vue";
import App from "./App.vue";
import UserView from "./views/UserView.vue";

import { init_axios } from "hola-web";
import { init_app } from "./plugins";

Vue.config.productionTip = false;
init_axios({ baseURL: "http://localhost:8088" });

const routes = [
  { path: '/user', name: 'user', component: UserView },
];

const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
init_app(App, routes, locales);
