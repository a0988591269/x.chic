import { defineNuxtPlugin } from "#app";
import { createBootstrap } from "bootstrap-vue-next/plugins/createBootstrap";

// Add the necessary CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createBootstrap());
  // 用於手動掛載應用
  // 但 Nuxt 會自動掛載，所以這行通常不需要
  // nuxtApp.vueApp.mount("#app");
});
