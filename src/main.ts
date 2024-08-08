import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./scss/global.scss";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiMenu } from "oh-vue-icons/icons";

addIcons(HiMenu);

const app = createApp(App);
app.use(router).mount("#app");
App.component("v-icon", OhVueIcon);
app.mount("#app");
