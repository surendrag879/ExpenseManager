import { createSlice } from "@reduxjs/toolkit";

var showList = JSON.parse(localStorage.getItem("showList") || "[]")

const initialState = {
    expanseData: []
}

const expenseSlice = createSlice({
    name: 'expanse',
    initialState,
    reducers: {
        addExpanse: (state, action) => {
            const data = action.payload;
            showList.push(data);
            localStorage.setItem('showList', JSON.stringify(showList))
            state.expanseData.push(data)
        }
    }
})

export const { addExpanse } = expenseSlice.actions;
export default expenseSlice.reducer;