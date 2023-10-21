import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'tokens',
    initialState: [],
    reducers: {
        addToken: (state, action) => {
            const addToToken = action.payload;
            state.push(addToToken);
        },
        removeToken: (state) => {
            state = null;
        }
    }
})

export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer; 