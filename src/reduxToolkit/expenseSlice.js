import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expanseData: []
}

const expenseSlice = createSlice({
    name: 'expanse',
    initialState,
    reducers: {
        addExpanse: (state, action) => {
            const data = action.payload;
            localStorage.setItem('expanseData', JSON.stringify(data))
            state.expanseData.push(data)
        }
    }
})

export const { addExpanse } = expenseSlice.actions;
export default expenseSlice.reducer;