/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import routes from "./routes";



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from) => {

  if (!(store.state.isAuthenticated || localStorage.getItem("is_authenticated")) && to.name !== "Login") {
    await store.dispatch("setLayout", 0)
    await router.replace({name:"Login"});
  }else
    await store.dispatch("setLayout", 1)
});
router.afterEach(async (to, from) => {
  if (to.name === "Login") {
    await store.dispatch("setLayout", 0)
  }
});
export default router;
