import items from "../../../apis/items";
import axios from "axios";

export const pickChampionName = ({ commit }, pickedChampion) => {
    commit("SET_PICKED_CHAMPION", pickedChampion);
};

export const fetchItems = ({ commit }) => {
    items.items().then(res => {
        let items = [];

        const data = res.data.data;

        for (const [key, value] of Object.entries(data)) {
            items.push(value);
        }

        commit("SET_ITEMS", items);
    });
};

export const searchForItems = ({ commit }, payload) => {
    console.log(payload);
    commit("SET_FILTER_ITEMS", payload);
};

// export const saveAllItems = ({ commit }, items) => {
//     // console.log(items);
//     commit("SET_SAVE_ALL_ITEMS", items);
// };

export const saveStartingItems = ({ commit }, items) => {
    commit("SET_SAVE_STARTING_ITEMS", items);
};
export const saveMiddleItems = ({ commit }, items) => {
    commit("SET_SAVE_MIDDLE_ITEMS", items);
};
export const saveFullItems = ({ commit }, items) => {
    commit("SET_SAVE_FULL_ITEMS", items);
};

// clear starting, middle and full items
export const clearStartingItems = ({ commit }) =>
    commit("SET_CLEAR_STARTING_ITEMS");

export const clearMiddleItems = ({ commit }) =>
    commit("SET_CLEAR_MIDDLE_ITEMS");

export const clearFullItems = ({ commit }) => commit("SET_CLEAR_FULL_ITEMS");

// Save to DB
// export const saveItemsToDB = ({ commit }) => commit("SAVE_ITEMS_TO_DB");
export const saveItemsToDB = ({ commit, getters }, value) => {
    let items = getters.getAllItems;

    axios
        .post("/api/items/shen", {
            title: value,
            items
        })
        .then(res => {
            console.log(res);
        });
};
