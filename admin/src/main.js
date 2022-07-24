import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppHeader from "./components/appHeader";
import AppSidebar from "./components/appSidebar";
import AppFooter from "./components/appFooter";
import AppModal from "./components/appModal";
import { Functions } from "./helpers";

const app = createApp(App);
app.config.globalProperties.$functions = Functions;
app.component("AppHeader", AppHeader);
app.component("AppSidebar", AppSidebar);
app.component("AppFooter", AppFooter);
app.component("AppModal", AppModal);
app.use(store);
app.use(router);
app.mount("#app");
