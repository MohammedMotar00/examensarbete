export const getPickedChampionName = state => state.pickedChampionName;

export const getItems = state => state.items[0];

export const filterSearchItems = state => {
    let search = state.searchForItem;
    return state?.items[0]?.filter(item => {
        return item?.name?.toLowerCase()?.match(search?.toLowerCase());
    });
};
