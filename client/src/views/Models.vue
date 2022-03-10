<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Models</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Model Name</th>
          <th>Brand</th>
          <th>#</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(model, model_key) in models" :key="model_key">
          <td>{{ model._id.substr(0, 6) }}</td>
          <td>{{ model.Name }}</td>
          <td>{{ model.Brand.Name }}</td>
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
  import ModelService from "../services/ModelService";
  let models = ref([]);
  onMounted(async () => {
    models.value = await ModelService.list();
  });
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
