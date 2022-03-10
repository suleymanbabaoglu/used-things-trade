<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Users</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th>Profile Type</th>
            <th>Postal Code</th>
            <th>Address</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, user_key) in users" :key="user_key">
            <td>{{ user._id.substr(0, 6) }}</td>
            <td>{{ user.FirstName }}</td>
            <td>{{ user.LastName }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.BirthDate }}</td>
            <td>{{ user.ProfileType }}</td>
            <td>{{ user.PostalCode }}</td>
            <td>{{ user.Address }}</td>
            <td>{{ user.Country }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ user.Phone }}</td>
            <td>
              <a :click="null" class="text-primary mr-3">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </a>

              <a :click="null" class="text-danger">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import UserService from "../services/UserService";
let users = ref([]);
onMounted(async () => {
  users.value = await UserService.list();
});

</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
