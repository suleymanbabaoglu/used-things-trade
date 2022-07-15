<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Brands</h1>
      <button @click="newBrand" class="btn btn-success">New Brand</button>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Brand Name</th>
            <th>Is Favorite?</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(brand, brand_key) in brands" :key="brand_key">
            <td>{{ brand._id.substr(3, 6) }}</td>
            <td>{{ brand.Name }}</td>
            <td>
              <span :class="brand.Favorite ? 'text-success' : 'text-danger'">{{
                brand.Favorite ? "Yes" : "No"
              }}</span>
            </td>
            <td>
              <a @click="editBrand(brand._id)" class="text-primary mr-3">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </a>

              <a @click="deleteBrand(brand._id)" class="text-danger">
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
import { onMounted, ref, reactive } from "vue";
import BrandService from "../services/BrandService";
import BrandCreateOrUpdate from "../components/Brands/BrandCreateOrUpdate";

let brands = reactive([]);
let modal = ref({
  display: false,
  title: "",
  key: "",
  component: null,
  data: null,
  func: null,
});
onMounted(() => {
  BrandService.list().then((response) => {
    response.forEach((brand) => {
      brands.push(brand);
    });
  });
});
const newBrand = () => {
  modal.value = {
    display: true,
    title: "New Brand",
    key: "brand" + Math.random(),
    component: BrandCreateOrUpdate,
    func: (brand) =>
      BrandService.create(brand).then((res) => {
        if (res) {
          brands.push(res);
          modal.value.display = false;
        }
      }),
  };
};
const editBrand = (brandId) => {
  modal.value = {
    display: true,
    title: "Update Brand",
    key: "brand" + Math.random(),
    component: BrandCreateOrUpdate,
    data: brandId,
    func: (data) =>
      BrandService.update(brandId, data).then((res) => {
        if (res) {
          brands.push(data);
          const index = brands.indexOf(brands.find((b) => b._id === brandId));
          brands.splice(index, 1);

          modal.value.display = false;
        }
      }),
  };
};
const deleteBrand = (brandId) => {
  BrandService.delete(brandId).then((res) => {
    if (res) {
      const index = brands.indexOf(brands.find((b) => b._id === brandId));
      brands.splice(index, 1);
    }
  });
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
