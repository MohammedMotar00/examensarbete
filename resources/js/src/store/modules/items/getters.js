export const getPickedChampionName = state => state.pickedChampionName;

export const getItems = state => state.items[0];

export const filterSearchItems = state => {
    let search = state.searchForItem;
    return state?.items[0]?.filter(item => {
        return item?.name?.toLowerCase()?.match(search?.toLowerCase());
    });
};

// Get starting, middle and full items
export const getStartingItems = state => state.startingItems[0];
export const getMiddleItems = state => state.middleItems[0];
export const getFullItems = state => state.fullItems[0];

// Get all items
export const getAllItems = state => {
    const starting = state.startingItems[0];
    const middle = state.middleItems[0];
    const full = state.fullItems[0];
    const arr = [];
    arr.push({ starting, middle, full });
    return arr[0];
};
