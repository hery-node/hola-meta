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
          <router-view :key="$route.fullPath"></router-view>
        </v-main>
      </v-app>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  name: "App",

  data() {
    return {};
  },
};
</script>
