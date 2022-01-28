import { createApp } from "vue";
import FloatingVue from "floating-vue";
import mitt from "mitt";
import App from "./App.vue";
import "floating-vue/dist/style.css";

const emitter = mitt();

FloatingVue.options.distance = 12;

const app = createApp(App).use(FloatingVue);

app.config.globalProperties.emitter = emitter;
app.mount("#app");
