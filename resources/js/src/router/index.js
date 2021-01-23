import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";

// Components

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        // {
        //     path: "/login",
        //     name: "Login",
        //     component: Login
        // },
        {
            path: "/",
            name: "Main",
            component: Main
        }
    ]
});
