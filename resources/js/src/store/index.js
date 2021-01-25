import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

// Modules
import champions from "./modules/champions";
import items from "./modules/items";

export default new Vuex.Store({
    state,
    getters,
    mutations: mutations,
    actions: actions,

    modules: {
        champions,
        items
    }
});
