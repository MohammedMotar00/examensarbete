import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import ChampionPage from "../views/ChampionPage.vue";
import AddItems from "../views/AddItems.vue";

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
        },
        {
            path: "/champion_page/:champion_name",
            name: "ChampionPage",
            component: ChampionPage
        },
        {
            path: "/additems",
            name: "AddItems",
            component: AddItems
        }
    ]
});
