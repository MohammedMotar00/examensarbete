export const SET_PICKED_CHAMPION = (state, data) => {
    state.pickedChampionName = data;
};

export const SET_ITEMS = (state, data) => {
    state.items.push(data);
};

export const SET_FILTER_ITEMS = (state, value) => {
    state.searchForItem = value;
};
