import { createStore } from "vuex";
import DefaultLayout from "../layouts/DefaultLayout";
import NoSidebarLayout from "../layouts/NoSidebarLayout";

export default createStore({
  state: {
    auth: { is_authenticated: false, access_token: "", refresh_token: "" },
    layout: NoSidebarLayout,
  },
  getters: {
    isAuth: (state) => state.auth.is_authenticated,
    getLayout: (state) => state.layout,
    getAccess: (state) => state.auth.access_token,
  },
  mutations: {
    setLayout: (state, lout) => {
      if (!lout) state.layout = NoSidebarLayout;
      else state.layout = DefaultLayout;
    },
    setAuth: (state, payload) => (state.auth = payload),
  },
  actions: {
    setLayout: (state, lout) => {
      state.commit("setLayout", lout);
    },
    setAuth: (state, payload) => state.commit("setAuth", payload),
  },
  modules: {},
});
