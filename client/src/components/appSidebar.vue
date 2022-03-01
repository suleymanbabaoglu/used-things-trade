<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li
          class="nav-item"
          v-for="(route, route_key) in routes"
          :key="route_key"
        >
          <router-link
            class="nav-link list-group-item"
            :to="route.path"
            active-class="active"
          >
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const routes = ref([
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/adverts",
    name: "Adverts",
  },
  {
    path: "/brands",
    name: "Brands",
  },
  {
    path: "/models",
    name: "Models",
  },
  {
    path: "/users",
    name: "Users",
  },
]);
</script>

<style scoped>
.list-group-item:last-child {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.list-group-item:first-child {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  color: #343A40;
  background-color:transparent;
  border: none !important;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #343A40;
  border-color: #007bff;
}
</style>
