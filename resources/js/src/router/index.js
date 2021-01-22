import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Login from "../views/Login.vue";

// Components

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login
        }
    ]
});
