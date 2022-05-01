<template>
  <div class="form-group">
    <label for="modelName" class="control-label">Model Name</label>
    <input
      id="modelName"
      type="text"
      class="form-control mb-1"
      v-model="model.Name"
      placeholder="Model Name"
    />
  </div>
  <div class="form-group mb-3">
    <select class="form-control" id="brand" v-model="model.Brand._id">
      <option
        v-for="(brand, brand_key) in brands"
        :value="brand._id"
        :key="brand_key"
      >
        {{ brand.Name }}
      </option>
    </select>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" @click="$emit('func', model)">
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
import { defineProps, onMounted, ref, reactive } from "vue";
import ModelService from "../../services/ModelService";
import BrandService from "../../services/BrandService";

const props = defineProps({
  data: Object,
});
let model = ref({
  Name: "",
  Brand: "",
});
let brands = reactive([]);

onMounted(async () => {
  if (props.data) {
    model.value = await ModelService.findOne(props.data);
  }
  await BrandService.list().then((response) => {
    response.forEach((brand) => {
      brands.push(brand);
    });
  });
});
</script>

<style scoped></style>
