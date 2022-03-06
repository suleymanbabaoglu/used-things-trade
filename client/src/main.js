import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppHeader from "./components/appHeader";
import AppSidebar from "./components/appSidebar";
import AppFooter from "./components/appFooter";

const app = createApp(App);

app.component("AppHeader", AppHeader);
app.component("AppSidebar", AppSidebar);
app.component("AppFooter", AppFooter);
app.use(store);
app.use(router);
app.mount("#app");
