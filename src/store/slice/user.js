import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: '',
        name: '',
        email: ''
    },
    authorized:  false,
    loadingStatus: false,
}

const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        ChangeUserData: (state, action) => {
            state.user = action.payload;
        },
        ChangeUserAuthorizeStatus: (state, action) => {
            state.authorized = action.payload;
        },
        ChangeLoadingStatus: (state, action) => {
            state.loadingStatus = action.payload;
        }
    }
})

export const { ChangeUserData, ChangeUserAuthorizeStatus, ChangeLoadingStatus } = userData.actions;
export default userData.reducer