<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Users</h1>
      <button @click="newUser()" class="btn btn-success">New User</button>
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
            <td>{{ user.Gender ? "Male" : "Female" }}</td>
            <td>{{ user.BirthDate }}</td>
            <td>{{ user.ProfileType ? "Private" : "Company" }}</td>
            <td>{{ user.PostalCode }}</td>
            <td>{{ user.Address }}</td>
            <td>{{ user.Country }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ user.Phone }}</td>
            <td>
              <a @click="editUser(user._id)" class="text-primary mr-3">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </a>

              <a @click="deleteUser(user._id)" class="text-danger">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <app-modal :modal="modal" @close="modal.display = false" />
    </div>
  </main>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import UserService from "../services/UserService";
import UserCreateOrUpdate from "../components/Users/UserCreateOrUpdate";

let users = reactive([]);
let modal = ref({
  display: false,
  title: "",
  key: "",
  component: null,
  data: null,
  func: null,
});
onMounted(() => {
  UserService.list().then((response) => {
    response.forEach((user) => {
      users.push(user);
    });
  });
});
const newUser = () => {
  modal.value = {
    display: true,
    title: "New User",
    key: "user" + Math.random(),
    component: UserCreateOrUpdate,
    func: (user) =>
      UserService.create(user).then((res) => {
        if (res) {
          users.push(res);
          modal.value.display = false;
        }
      }),
  };
};
const editUser = (userId) => {
  modal.value = {
    display: true,
    title: "Update User",
    key: "user" + Math.random(),
    component: UserCreateOrUpdate,
    data: userId,
    func: (data) =>
      UserService.update(userId, data).then((res) => {
        if (res) {
          users.push(data);
          const index = users.indexOf(users.find((u) => u._id === userId));
          users.splice(index, 1);

          modal.value.display = false;
        }
      }),
  };
};
const deleteUser = (userId) => {
  UserService.delete(userId).then((res) => {
    if (res) {
      const index = users.indexOf(users.find((b) => b._id === userId));
      users.splice(index, 1);
    }
  });
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
