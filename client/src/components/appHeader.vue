<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"
      >Company name</a
    >
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a @click="logout" class="nav-link" style="cursor:pointer">Sign out</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  /* eslint-disable */
import UserService from "../services/UserService";
import { useStore } from "vuex";

const store = useStore();
const logout = async () => {
  await UserService.logout(store.getters.getAccess);
};
</script>

<style scoped lang="scss"></style>
