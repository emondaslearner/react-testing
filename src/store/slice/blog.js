import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    limit: 20,
    sortType: 'dsc',
    sortBy: 'updatedAt',
    search: ''
}

const Blog = createSlice({
    name: 'Blog',
    initialState,
    reducers: {
        ChangeBlogPageApiCall: (state, action) => {
            state.page = action.payload
        },
        ChangeBlogLimitApiCall: (state, action) => {
            state.limit = action.payload
        },
        ChangeBlogSortTypeApiCall: (state, action) => {
            state.sortType = action.payload
        },
        ChangeBlogSortByApiCall: (state, action) => {
            state.sortBy = action.payload
        },
        ChangeBlogSearchApiCall: (state, action) => {
            state.search = action.payload
        }
    }
})

export const {
    ChangeBlogLimitApiCall,
    ChangeBlogPageApiCall,
    ChangeBlogSortTypeApiCall,
    ChangeBlogSortByApiCall,
    ChangeBlogSearchApiCall
} = Blog.actions;

export default Blog.reducer;