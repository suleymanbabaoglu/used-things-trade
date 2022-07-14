<template>
  <component :is="store.state.layout">
    <router-view />
  </component>
</template>
<script setup>
import store from "./store";

</script>
<style lang="scss"></style>
