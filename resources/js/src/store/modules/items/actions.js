import items from "../../../apis/items";
import axios from "axios";

export const pickChampionName = ({ commit }, pickedChampion) => {
    commit("SET_PICKED_CHAMPION", pickedChampion);
};

// saves champion image to store when user oicks champion for the build
export const saveChampionImage = ({ commit }, image) => {
    commit("SET_CHAMPION_IMAGE", image);
};

export const fetchItems = ({ commit }) => {
    items.items().then(res => {
        let items = [];

        const data = res.data.data;
        console.log(res.data);

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
export const saveItemsToDB = ({ getters, commit }, collectionTitle) => {
    let items = getters.getAllItems;
    let pickedChamp = getters.getPickedChampionName.toLowerCase();
    let championImage = getters.getChampionImage;

    axios
        .post(`api/items/${pickedChamp}`, {
            title: collectionTitle,
            items,
            image: championImage
        })
        .then(res => {
            commit("SET_RESPONSE", res.data);
        });
};

// clear POST response
export const clearPostResponse = ({ commit }) =>
    commit("SET_CLEAR_POST_RESPONSE");

// Fetch items fromMYSQL
export const fetchItemCollection = ({ commit }, champion) => {
    let championName = champion.toLowerCase();

    async function getItemCollection() {
        const response = await axios.get(`/api/${championName}`);
        console.log(response);
        let data = response.data;

        championName === "shen" && commit("SET_SHEN_COLLECTION", data);
        championName === "yasuo" && commit("SET_YASUO_COLLECTION", data);
        championName === "yone" && commit("SET_YONE_COLLECTION", data);
    }

    getItemCollection();
};

// clear champion items collection array
export const clearChampionItemsCollections = ({ commit }) =>
    commit("SET_CLEAR_CHAMPION_ITEMS_COLLECTIONS");

// get single champion items collection from MYSQL
export const fetchSingleChampionItemsCollection = ({ commit }, value) => {
    // let value =data
    async function getData() {
        const response = await axios(
            `/api/items/${value.championName}/${value.id}`
        );

        let data = response.data;
        // console.log(response.data);

        commit("SET_SAVE_SINGLE_CHAMPION_ITEMS_COLLECTION", data);
    }

    getData();
};

// clear singleChampionItemsCollection
export const clearSingleChampionItemsCollection = ({ commit }) =>
    commit("SET_CLEAR_SINGLE_CHAMPION_ITEMS_COLLECTION");
