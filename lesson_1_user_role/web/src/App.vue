<template>
  <div>
    <template v-if="$route.meta.login">
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
    <template v-else>
      <v-app>
        <v-main>
          <h-nav-bar :title="title" :menus="menus">
            <div slot="toolbar">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon @click="exit_to_app" v-on="on">
                    <v-icon>mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>{{ $t("app.logout_hint") }}</span>
              </v-tooltip>
            </div>
          </h-nav-bar>
          <template>
            <div class="ma-5">
              <v-alert v-model="alert.shown" :type="alert.type" dismissible><span v-html="alert.msg"></span></v-alert>
            </div>
          </template>
          <router-view :key="$route.fullPath" class="ma-3" @alert="show_alert"></router-view>
        </v-main>
      </v-app>
    </template>
  </div>
</template>

<script>
import { axios_get, is_success_response } from "hola-web";
import { get_menus } from "./router";

export default {
  components: {},
  name: "App",

  data() {
    return {
      //success,info,warning,error
      alert: { shown: false, type: "info", msg: "" },
      title: this.$t("login.title"),
      menus: get_menus(this),
    };
  },

  methods: {
    show_alert(msg_obj) {
      const { type, msg, delay } = msg_obj;
      const time = delay ? delay : 10 * 1000;
      this.alert.shown = true;
      this.alert.type = type;
      this.alert.msg = msg ? msg.replace(/\n/g, "<br />") : "";
      delay || delay == 0 || setTimeout(() => (this.alert.shown = false), time);
    },

    async exit_to_app() {
      const { code } = await axios_get("/user/logout");
      if (is_success_response(code)) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
