import React from 'react';
import ExpenseForm from './Components/NewExpenses/ExpenseForm';
import Expense from './Components/Expenses/Expense';
var showList = JSON.parse(localStorage.getItem("showList") || "[]")
// import FormValidation from './form';
const App = () => {
    let data = showList;


    return (
        <div className='container'>
            <ExpenseForm />
            <Expense data={data} />
            {/* <FormValidation /> */}
        </div>
    );
}

export default App;