import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import Element from "element-plus";
import { stateSymbol, createState } from "./store/index";

import { RouterPath } from "./assets/js/util";

import "./assets/css/_mixin.scss";
import "./assets/css/index.scss";

import axios from "./axios";

export const app = createApp(App);

app.use(Router);
app.use(Element);
app.provide(stateSymbol, createState());
app.provide('$goPath', RouterPath.goPath.bind(app));
//全局配置
app.config.globalProperties.$axios = axios;

app.mount("#app");
