<template>
  <form class="form-signin">
    <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72" />
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <div class="form-group">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.email"
      />
    </div>
    <div class="form-group">
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
    </div>
    <a @click="login(user)" class="btn btn-lg btn-primary btn-block">
      Sign in
    </a>
  </form>
</template>

<script setup>
import { ref } from "vue";
import UserService from "../services/UserService";
let user = ref({
  email: "",
  password: "",
});
const login = async (data) => {
  await UserService.login(data);
};
</script>

<style scoped lang="scss">
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
