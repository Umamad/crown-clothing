import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

const collectionSelect = state => state.shop;

export const shopCollectionSelect = createSelector(
    [collectionSelect],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [shopCollectionSelect],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [shopCollectionSelect],
    collections => collections ? collections[collectionUrlParam] : null //find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);