/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import routes from "./routes";
import { getLocalStorage, setObjectLocalStorage } from "../helpers/Functions";

if (!getLocalStorage("auth"))
  setObjectLocalStorage("auth", {
    is_authenticated: false,
    access_token: "",
    refresh_token: "",
  });
else store.dispatch("setAuth", JSON.parse(getLocalStorage("auth")));

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/**
 * After Succeeded Login, set the auth true and navigate to home
 */
router.beforeEach((to, from, next) => {
  store.dispatch("setLayout", to.name !== "Login");
  to.name !== "Login" && !store.getters.isAuth
    ? next({ name: "Login" })
    : to.name === "Login" && store.getters.isAuth
    ? next("/")
    : next();
});

export default router;
