export const getPickedChampionName = state => state.pickedChampionName;

export const getChampionImage = state => state.championImage;

export const getItems = state => state.items[0];

export const filterSearchItems = state => {
    console.log(state);
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

export const getShenItemsCollection = state => state.shenItemsCollection[0];
export const getYasuoItemsCollection = state => state.yasuoItemsCollection[0];
export const getYoneItemsCollection = state => state.yoneItemsCollection[0];

// Get single champion items collection
export const getSingleChampionItemsCollection_Starting = state =>
    state.singleChampionItemsCollection[0]?.starting;

export const getSingleChampionItemsCollection_Middle = state =>
    state.singleChampionItemsCollection[0]?.middle;

export const getSingleChampionItemsCollection_Full = state =>
    state.singleChampionItemsCollection[0]?.full;

export const getSingleChampionImageCollection = state =>
    state.championItemPageImage;

// Get response
export const getResponse = state => state.response;
