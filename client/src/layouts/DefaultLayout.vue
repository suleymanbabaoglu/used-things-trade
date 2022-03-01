<template>
  <app-header />
  <div class="container-fluid">
    <div class="row">
      <app-sidebar />
      <router-view />
    </div>
  </div>
  <app-footer />
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped></style>
