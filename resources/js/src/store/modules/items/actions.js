import items from "../../../apis/items";

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
