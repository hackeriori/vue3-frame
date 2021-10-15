import { createApp } from "vue";
import ElementPlus from 'element-plus';
import App from "./App.vue";
import setVersion from "./version";

const app = createApp(App);
app.use(ElementPlus).mount('#app');

setVersion();