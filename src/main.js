import { createApp } from "vue";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import mitt from "mitt";
import App from "./App.vue";
import store from "./store";

const emitter = mitt();

FloatingVue.options.distance = 12;

const app = createApp(App);

app.use(store);
app.use(FloatingVue);

app.config.globalProperties.emitter = emitter;
app.mount("#gandalf-app");
