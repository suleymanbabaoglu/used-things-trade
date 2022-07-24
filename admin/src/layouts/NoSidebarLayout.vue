<template>
  <div class="container mt-5 text-center">
    <div class="row">
      <div class="col-6 offset-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoSidebarLayout",
};
</script>

<style scoped></style>
