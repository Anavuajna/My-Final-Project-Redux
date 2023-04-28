import { createSlice } from '@reduxjs/toolkit';

export const dishesSLice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: "СУПЫ"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishesSLice.actions;
export default dishesSLice.reducer