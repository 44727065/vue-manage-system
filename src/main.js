/*
 * @Author: your name
 * @Date: 2021-05-12 10:55:31
 * @LastEditTime: 2021-05-12 17:34:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-elementPlus/src/main.js
 */
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import "./assets/css/icon.css";

console.log(process.env);
const app = createApp(App);
installElementPlus(app);
app.use(store)
	.use(router)
	.mount("#app");
