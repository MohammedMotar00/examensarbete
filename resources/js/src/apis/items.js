import Api from "./Api";

const itemsApi =
    "http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/item.json";

export default {
    items() {
        return Api.get(itemsApi);
    }
};
