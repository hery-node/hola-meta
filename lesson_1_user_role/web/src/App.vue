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
          <h-nav-bar :title="title" :menus="menus"></h-nav-bar>
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
  },
};
</script>
