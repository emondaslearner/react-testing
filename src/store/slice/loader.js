import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loader: false
}

const loader = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: {
        ChangeLoaderStatus: (state, action) => {
            state.loader = action.payload
        }
    }
})

export const { ChangeLoaderStatus } = loader.actions;
export default loader.reducer;