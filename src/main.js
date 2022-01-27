import { createApp } from "vue";
import FloatingVue from "floating-vue";
import App from "./App.vue";
import "floating-vue/dist/style.css";

FloatingVue.options.distance = 12;

createApp(App).use(FloatingVue).mount("#app");
