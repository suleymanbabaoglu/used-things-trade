<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script setup>
import { ref } from "vue";
import router from "./router";
import DefaultLayout from "./layouts/DefaultLayout";
import NoSidebarLayout from "./layouts/NoSidebarLayout";

let layout = ref();

router.beforeEach((to) => {
  if (to.meta.layout === "default") layout.value = DefaultLayout;
  else layout.value = NoSidebarLayout;
});
</script>
<style lang="scss"></style>
