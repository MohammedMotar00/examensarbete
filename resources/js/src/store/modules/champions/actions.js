import champion from "../../../apis/champions";

export const fetchChampions = ({ commit }) => {
    champion.yasuo().then(res => {
        let data = res.data.data.Yasuo;
        commit("SET_YASUO", data);
    });

    champion.shen().then(res => {
        let data = res.data.data.Shen;
        commit("SET_SHEN", data);
    });

    champion.yone().then(res => {
        let data = res.data.data.Yone;
        commit("SET_YONE", data);
    });
};
