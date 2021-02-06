export const SET_PICKED_CHAMPION = (state, data) => {
    state.pickedChampionName = data;
};

export const SET_ITEMS = (state, data) => {
    state.items.push(data);
};

export const SET_FILTER_ITEMS = (state, value) => {
    state.searchForItem = value;
};

export const SET_SAVE_STARTING_ITEMS = (state, items) => {
    state.startingItems.push(items);
};
export const SET_SAVE_MIDDLE_ITEMS = (state, items) => {
    state.middleItems.push(items);
};
export const SET_SAVE_FULL_ITEMS = (state, items) => {
    state.fullItems.push(items);
};

// Clear items
export const SET_CLEAR_STARTING_ITEMS = state => (state.startingItems = []);
export const SET_CLEAR_MIDDLE_ITEMS = state => (state.middleItems = []);
export const SET_CLEAR_FULL_ITEMS = state => (state.fullItems = []);

// Get champion items collection from MYSQL
export const SET_SHEN_COLLECTION = (state, itemCollection) => {
    state.shenItemsCollection.push(itemCollection);
};

export const SET_YASUO_COLLECTION = (state, itemCollection) => {
    state.yasuoItemsCollection.push(itemCollection);
};

export const SET_YONE_COLLECTION = (state, itemCollection) => {
    state.yoneItemsCollection.push(itemCollection);
};

// clear champion items collection array
export const SET_CLEAR_CHAMPION_ITEMS_COLLECTIONS = state => {
    state.shenItemsCollection = [];
    state.yasuoItemsCollection = [];
    state.yoneItemsCollection = [];
};

// Save single champion items collection
// export const SET_SAVE_SINGLE_CHAMPION_ITEMS_COLLECTION = (state, items) =>
//     state.singleChampionItemsCollection.push(items);

export const SET_SAVE_SINGLE_CHAMPION_ITEMS_COLLECTION = (state, items) => {
    state.singleChampionItemsCollection.push(items.full);
};

// Clear singleChampionItemsCollection
export const SET_CLEAR_SINGLE_CHAMPION_ITEMS_COLLECTION = state =>
    (state.singleChampionItemsCollection = []);
