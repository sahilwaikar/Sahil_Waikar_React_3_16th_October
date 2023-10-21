import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./redux/tokenSlice";

export default configureStore({
    reducer: {
        tokens: tokenReducer,
    }
});