import Api from "./Api";

const SHEN = "Shen.json";
const YASUO = "Yasuo.json";
const YONE = "Yone.json";

export default {
    shen() {
        return Api.get(SHEN);
    },

    yasuo() {
        return Api.get(YASUO);
    },

    yone() {
        return Api.get(YONE);
    }
};
