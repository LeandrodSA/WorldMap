<template>
  <div class="main">
    <v-toolbar class="bar">
        <div v-for="rot in routes" :key="rot.id">
          <v-btn class="item" :to="rot.path">
           {{ rot.name }}
          </v-btn>
        </div>
    </v-toolbar>

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./router/index";

export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss" src="./style.scss"></style>