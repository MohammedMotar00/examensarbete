import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

new Vue({
    store: store,
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");