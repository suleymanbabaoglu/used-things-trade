/* eslint-disable */
import { createStore } from "vuex";
import DefaultLayout from "../layouts/DefaultLayout";
import NoSidebarLayout from "../layouts/NoSidebarLayout";

export default createStore({
  state: {
    isAuthenticated: false,
    layout: NoSidebarLayout,
    access_token: localStorage.getItem("access_token"),
  },
  getters: {
    isAuth: (state) => state.isAuthenticated,
    getLayout: (state) => state.layout,
    getAccess: (state) => state.access_token,
  },
  mutations: {
    setLayout: (state, lout) => {
      if (lout == 0) state.layout = NoSidebarLayout;
      else state.layout = DefaultLayout;
    },
    setAuth: (state, payload) => (state.isAuthenticated = payload),
  },
  actions: {
    setLayout: (state, lout) => {
      state.commit("setLayout", lout);
    },
    setAuth: (state, payload) => state.commit("setAuth", payload),
  },
  modules: {},
});
