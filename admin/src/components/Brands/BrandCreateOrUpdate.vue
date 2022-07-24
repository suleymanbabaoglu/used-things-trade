<template>
  <div class="form-group">
    <label for="brandName" class="control-label">Brand Name</label>
    <input
      id="brandName"
      type="text"
      class="form-control mb-1"
      v-model="brand.Name"
      placeholder="Brand Name"
    />
  </div>
  <div class="form-check form-switch mb-3">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="isFavorite"
      v-model="brand.Favorite"
    />
    <label class="form-check-label" for="isFavorite">Is Favorite ?</label>
  </div>
  <div class="modal-footer">
    <button
      type="button"
      class="btn btn-primary"
      @click="$emit('func', brand)"
    >
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
import BrandService from "../../services/BrandService";
const props = defineProps({
  data: Object,
});
let brand = ref({
  Name: "",
  Favorite: false,
});

onMounted(async () => {
  if (props.data) {
    brand.value = await BrandService.findOne(props.data);
  }
});
</script>

<style scoped></style>
