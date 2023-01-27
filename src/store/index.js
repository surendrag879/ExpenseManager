import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../reduxToolkit/expenseSlice";
const store = configureStore({
    reducer: {
        expanse: expenseReducer,
    }
})

export default store;