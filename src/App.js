import React, { useState, useEffect } from 'react';
import Expense from './Components/Expenses/Expense';
import NewExpense from './Components/NewExpenses/NewExpense';

// let expense = [];
const App = () => {

    const [Newdata, setNewData] = useState([])

    // function fetchData() {
    //     fetch('https://reqres.in/api/users/2').then(
    //         response => {
    //             return response.json();
    //         }
    //     ).then(
    //         data => {
    //             console.log(data);
    //             setNewData('Api data', data);
    //         }
    //     );
    // }

    // useEffect(() => {
    //     fetchData();

    // }, []);

    const ExpenseFormData = (expenses) => {
        const updateData = [expenses, ...Newdata]
        setNewData(updateData)
        console.log('database data', updateData);

    };

    return (
        <div>
            <NewExpense onAddExpense={ExpenseFormData} />
            <Expense item={Newdata} />
        </div>
    );
}

export default App;