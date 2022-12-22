import Vue from "vue";
import { init_axios, is_no_session } from "hola-web";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

Vue.config.productionTip = false;

init_axios({ baseURL: 'http://localhost:8088' }, {
  handle_response: (code) => {
    if (is_no_session(code)) {
      window.location.href = "/"
    }
  },
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
