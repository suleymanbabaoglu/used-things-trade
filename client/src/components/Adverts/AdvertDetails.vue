<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table>
          <tr>
            <td>
              <h4>{{ data.User.FirstName + " " + data.User.LastName }}</h4>
            </td>
            <td>
              <h4>
                [ <span :class="data.AdvertStatus ?'text-success' :'text-danger'">ID: {{ data._id.substr(0, 6) }} </span> ]
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Brand:</h5>
              {{ data.Brand.Name }}
            </td>
            <td>
              <h5>Model:</h5>
              {{ data.Model.Name }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Price:</h5>
              {{ data.Price.$numberDecimal }}
            </td>
            <td>
              <h5>KM:</h5>
              {{ data.Kilometer }}
            </td>
            <td>
              <h5>Year:</h5>
              {{ data.FirstRegistration.substr(0, 4) }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Type:</h5>
              {{ data.Type }}
            </td>
            <td>
              <h5>Warranty:</h5>
              {{ data.Warranty }}
            </td>
            <td>
              <h5>Status:</h5>
              {{ data.Status }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Customer Type:</h5>
              {{ data.Advertiser }}
            </td>
            <td>
              <h5>HP:</h5>
              {{ data.HorsePower }}
            </td>
            <td>
              <h5>KW:</h5>
              {{ data.KiloWatts }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Fuel:</h5>
              {{ data.Fuel }}
            </td>
            <td>
              <h5>Transmission:</h5>
              {{ data.Transmission }}
            </td>
            <td>
              <h5>Drive Type:</h5>
              {{ data.Drive }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Color:</h5>
              {{ data.Color }}
            </td>
            <td>
              <h5>Doors:</h5>
              {{ data.Doors }}
            </td>
            <td>
              <h5>Seats:</h5>
              {{ data.Seats }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Country:</h5>
              {{ data.Country }}
            </td>
            <td>
              <h5>State:</h5>
              {{ data.State }}
            </td>
            <td>
              <h5>City:</h5>
              {{ data.City }}
            </td>
          </tr>
          <tr>
            <td>
              <h5>Created At :</h5>
              {{ data.createdAt.substr(0, 10) }}
            </td>
            <td>
              <h5>Updated At :</h5>
              {{ data.updatedAt.substr(0, 10) }}
            </td>
          </tr>
          <h5>Description :</h5>
          <tr>
            <p>{{ data.Description }}</p>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div class="modal-footer">
    <button
      type="button"
      :class="!data.AdvertStatus ? 'btn btn-success' : 'btn btn-danger'"
      @click="$emit('func', data._id)"
    >
      {{ !data.AdvertStatus ? "Set Active" : "Set Passive" }}
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
import { defineProps } from "vue";

defineProps({
  data: Object,
});
</script>

<style scoped></style>
