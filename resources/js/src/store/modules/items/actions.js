// export const pickChampion = ({ commit }, pickedChampion) =>
//     commit("SET_PICKED_CHAMPION", pickedChampion);

export const pickChampionName = ({ commit }, pickedChampion) => {
    // console.log(pickedChampion);
    commit("SET_PICKED_CHAMPION", pickedChampion);
};
