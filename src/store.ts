import { configureStore } from "@reduxjs/toolkit";
import searchModeReducer from "./features/searchMode/searchModeSlice";
import tempUnitReducer from "./features/tempUnits/tempUnitSlice";
import dataFromApiReducer from "./features/dataFromApi/dataFromApiSlice";
import daySelectorReducer from "./features/daySelector/daySelectorSlice";

export const store = configureStore({
  reducer: {
    searchMode: searchModeReducer,
    tempUnit: tempUnitReducer,
    dataFromApi: dataFromApiReducer,
    daySelector: daySelectorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
