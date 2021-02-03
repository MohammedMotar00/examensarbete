export const SET_PICKED_CHAMPION = (state, data) => {
    state.pickedChampionName = data;
};

export const SET_ITEMS = (state, data) => {
    state.items.push(data);
};

export const SET_FILTER_ITEMS = (state, value) => {
    state.searchForItem = value;
};

// export const SET_SAVE_ALL_ITEMS = (state, items) => {
//     state.allItems.push(items);
// };

export const SET_SAVE_STARTING_ITEMS = (state, items) => {
    state.startingItems = [];
    state.startingItems.push(items);
};
export const SET_SAVE_MIDDLE_ITEMS = (state, items) => {
    state.middleItems.push(items);
};
export const SET_SAVE_FULL_ITEMS = (state, items) => {
    state.fullItems.push(items);
};

// Clear items

// export const SET_CLEAR_STARTING_ITEMS = state => (state.startingItems = null);
// export const SET_CLEAR_MIDDLE_ITEMS = state => (state.startingItems = null);
// export const SET_CLEAR_FULL_ITEMS = state => (state.startingItems = null);

// Save items to DB
export const getStartingItems = state => {};
