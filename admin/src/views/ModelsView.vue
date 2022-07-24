<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Models</h1>
      <button @click="newModel" class="btn btn-success">New Model</button>
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
            <td>{{ model._id.substr(3, 6) }}</td>
            <td>{{ model.Name }}</td>
            <td>{{ model.Brand.Name }}</td>
            <td>
              <a @click="editModel(model._id)" class="text-primary mr-3">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </a>

              <a @click="deleteModel(model._id)" class="text-danger">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <app-modal :modal="modal" @close="modal.display = false" />
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import ModelService from "../services/ModelService";
import ModelCreateOrUpdate from "../components/Models/ModelCreateOrUpdate";

let modal = ref({
  display: false,
  title: "",
  key: "",
  component: null,
  data: null,
  func: null,
});
let models = reactive([]);
onMounted(async () => {
  await ModelService.list().then((response) => {
    response.forEach((model) => {
      models.push(model);
    });
  });
});

const newModel = () => {
  modal.value = {
    display: true,
    title: "New Model",
    key: "model" + Math.random(),
    component: ModelCreateOrUpdate,
    func: (model) =>
      ModelService.create(model).then((res) => {
        if (res) {
          models.push({
            ...res,
            Brand: model.Brand,
          });
          modal.value.display = false;
        }
      }),
  };
};
const editModel = (modelId) => {
  modal.value = {
    display: true,
    title: "Update Model",
    key: "model" + Math.random(),
    component: ModelCreateOrUpdate,
    data: modelId,
    func: (data) =>
      ModelService.update(modelId, data).then((res) => {
        if (res) {
          let index = models.indexOf((m) => m._id === modelId);
          models.splice(index, 1);

          models.push(res);
          modal.value.display = false;
        }
      }),
  };
};
const deleteModel = (modelId) => {
  ModelService.delete(modelId).then((res) => {
    if (res) {
      const index = models.indexOf(models.find((b) => b._id === modelId));
      models.splice(index, 1);
    }
  });
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
