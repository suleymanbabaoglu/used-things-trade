<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Adverts</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Type</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(advert, advert_key) in adverts" :key="advert_key">
            <td>{{ advert._id.substr(0, 6) }}</td>
            <td>{{ advert.User.FirstName + " " + advert.User.LastName }}</td>
            <td>{{ advert.Brand.Name }}</td>
            <td>{{ advert.Model.Name }}</td>
            <td>{{ advert.FirstRegistration.substr(0,4) }}</td>
            <td>{{ advert.Type }}</td>
            <td>
              <a @click="details(advert)" class="text-primary mr-3">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </a>

              <a @click="deleteAdvert(advert._id)" class="text-danger">
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
import AdvertService from "../services/AdvertService";
import AdvertDetails from "../components/Adverts/AdvertDetails";

let adverts = reactive([]);
let modal = ref({
  display: false,
  title: "",
  key: "",
  component: null,
  data: null,
  func: null,
});
onMounted(() => {
  AdvertService.list().then((response) => {
    response.forEach((advert) => {
      adverts.push(advert);
    });
  });
});

const details = (data) => {
  modal.value = {
    display: true,
    title: "Advert Details",
    key: "advert" + Math.random(),
    component: AdvertDetails,
    data,
    func: (id) =>
      AdvertService.statusUpdate(id, { AdvertStatus: !data.AdvertStatus }).then(
        (res) => {
          if (res) {
            adverts.push(res);
            const index = adverts.indexOf(
              adverts.find((u) => u._id === data._id)
            );
            adverts.splice(index, 1);

            modal.value.display = false;
          }
        }
      ),
  };
};

const deleteAdvert = (userId) => {
  AdvertService.delete(userId).then((res) => {
    if (res) {
      const index = adverts.indexOf(adverts.find((b) => b._id === userId));
      adverts.splice(index, 1);
    }
  });
};
</script>

<style scoped></style>
