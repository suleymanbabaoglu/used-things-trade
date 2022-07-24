<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="firstName" class="control-label">First Name</label>
        <input
          id="firstName"
          type="text"
          class="form-control mb-1"
          v-model="user.FirstName"
          placeholder="First Name"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="lastName" class="control-label">Last Name</label>
        <input
          id="lastName"
          type="text"
          class="form-control mb-1"
          v-model="user.LastName"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group mb-3">
        <label for="gender" class="control-label">Gender</label>
        <select class="form-control" id="gender" v-model="user.Gender">
          <option value="">Select a Gender</option>
          <option value="false">Female</option>
          <option value="true">Male</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="birthDate" class="control-label">Birth Date</label>
        <input
          id="birthDate"
          type="text"
          class="form-control mb-1"
          v-model="user.BirthDate"
          placeholder="Birth Date"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="profileType" class="control-label">Profile Type</label>
        <select class="form-control" id="profileType" v-model="user.ProfileType">
          <option value="">Select a Profile Type</option>
          <option value="false">Private</option>
          <option value="true">Company</option>
        </select>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="postalCode" class="control-label">Postal Code</label>
        <input
          id="postalCode"
          type="text"
          class="form-control mb-1"
          v-model="user.PostalCode"
          placeholder="Postal Code"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="phone" class="control-label">Phone</label>
        <input
          id="phone"
          type="text"
          class="form-control mb-1"
          v-model="user.Phone"
          placeholder="Phone"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="form-group">
        <label for="address" class="control-label">Address</label>
        <input
          id="address"
          type="text"
          class="form-control mb-1"
          v-model="user.Address"
          placeholder="Address"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="country" class="control-label">Country</label>
        <input
          id="country"
          type="text"
          class="form-control mb-1"
          v-model="user.Country"
          placeholder="Country"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="email" class="control-label">Email</label>
        <input
          id="email"
          type="email"
          class="form-control mb-1"
          v-model="user.Email"
          placeholder="Email"
        />
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" @click="$emit('func', user)">
      Save changes
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-dismiss="modal"
      @click="$emit('close')"
    >
      Close
    </button>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import UserService from "../../services/UserService";
const props = defineProps({
  data: Object,
});
const user = ref({});

onMounted(async () => {
  if (props.data) {
    user.value = await UserService.findOne(props.data);
  }
});
</script>

<style scoped></style>
