<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="brand" class="control-label">Brand</label>
        <select class="form-control" id="brand" v-model="advert.Brand._id">
          <option
            v-for="(brand, brand_key) in brands"
            :value="brand._id"
            :key="brand_key"
          >
            {{ brand.Name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="model" class="control-label">Model</label>
        <select class="form-control" id="model" v-model="advert.Model._id">
          <option
            v-for="(model, model_key) in models"
            :value="model._id"
            :key="model_key"
          >
            {{ model.Name }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="price" class="control-label">Price</label>
        <input
          id="price"
          type="number"
          class="form-control mb-1"
          v-model="advert.Price"
          placeholder="Price"
        />
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label for="kilometer" class="control-label">Kilometer</label>
        <input
          id="kilometer"
          type="number"
          class="form-control mb-1"
          v-model="advert.Kilometer"
          placeholder="kilometer"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="firstRegistration" class="control-label"
          >First Registration</label
        >
        <input
          id="firstRegistration"
          type="text"
          class="form-control mb-1"
          v-model="advert.FirstRegistration"
          placeholder="First Registration"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="type" class="control-label">Type</label>
        <input
          id="type"
          type="text"
          class="form-control mb-1"
          v-model="advert.Type"
          placeholder="Type"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="warranty"
          v-model="advert.Warranty"
        />
        <label class="form-check-label" for="warranty">Warranty</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="status" class="control-label">Status</label>
        <input
          id="status"
          type="text"
          class="form-control mb-1"
          v-model="advert.Status"
          placeholder="Status"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="form-group">
        <label for="customerType" class="control-label">Customer Type</label>
        <input
          id="customerType"
          type="text"
          class="form-control mb-1"
          v-model="advert.Advertiser"
          placeholder="Customer Type"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="hp" class="control-label">HP</label>
        <input
          id="hp"
          type="number"
          class="form-control mb-1"
          v-model="advert.HorsePower"
          placeholder="HP"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="kw" class="control-label">Kilowatts</label>
        <input
          id="kw"
          type="number"
          class="form-control mb-1"
          v-model="advert.Kilowatts"
          placeholder="KW"
        />
      </div>
      <div class="form-group">
        <label for="fuel" class="control-label">Fuel</label>
        <input
          id="fuel"
          type="text"
          class="form-control mb-1"
          v-model="advert.Fuel"
          placeholder="Fuel"
        />
      </div>
      <div class="form-group">
        <label for="gear" class="control-label">Transmission</label>
        <input
          id="gear"
          type="text"
          class="form-control mb-1"
          v-model="advert.Transmission"
          placeholder="Transmission"
        />
      </div>
      <div class="form-group">
        <label for="drive" class="control-label">Drive Type</label>
        <input
          id="drive"
          type="number"
          class="form-control mb-1"
          v-model="advert.Drive"
          placeholder="Drive Type"
        />
      </div>
      <div class="form-group">
        <label for="color" class="control-label">Color</label>
        <input
          id="color"
          type="text"
          class="form-control mb-1"
          v-model="advert.Color"
          placeholder="Color"
        />
      </div>
      <div class="form-group">
        <label for="doors" class="control-label">Doors</label>
        <input
          id="doors"
          type="number"
          class="form-control mb-1"
          v-model="advert.Doors"
          placeholder="Doors"
        />
      </div>
      <div class="form-group">
        <label for="seats" class="control-label">Seats</label>
        <input
          id="seats"
          type="number"
          class="form-control mb-1"
          v-model="advert.Seats"
          placeholder="Seats"
        />
      </div>
      <div class="form-group">
        <label for="country" class="control-label">Country</label>
        <input
          id="country"
          type="text"
          class="form-control mb-1"
          v-model="advert.Country"
          placeholder="Country"
        />
      </div>
      <div class="form-group">
        <label for="state" class="control-label">State</label>
        <input
          id="state"
          type="text"
          class="form-control mb-1"
          v-model="advert.State"
          placeholder="State"
        />
      </div>
      <div class="form-group">
        <label for="city" class="control-label">City</label>
        <input
          id="city"
          type="text"
          class="form-control mb-1"
          v-model="advert.City"
          placeholder="City"
        />
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button
      type="button"
      class="btn btn-primary"
      @click="$emit('func', advert)"
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
import { defineProps, onMounted, ref, reactive } from "vue";
import AdvertService from "../../services/AdvertService";
import BrandService from "../../services/BrandService";
import ModelService from "../../services/ModelService";
const props = defineProps({
  data: Object,
});
const advert = ref({});
const brands = reactive({});
const models = reactive({});

onMounted(async () => {
  props.data ? (advert.value = await AdvertService.findOne(props.data)) : false;

  await BrandService.list().then((response) => {
    response.forEach((brand) => {
      brands.push(brand);
    });
  });
  await ModelService.list().then((response) => {
    response.forEach((model) => {
      models.push(model);
    });
  });
});
</script>

<style scoped></style>
