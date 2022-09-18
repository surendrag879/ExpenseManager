import React, { useState } from "react";
import './ExpenseForm.css';

export default function ExpenseForm(props) {

    const [Title, setTitle] = useState('');
    const [Amount, setAmount] = useState('');
    const [Date, setDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            id: Math.random().toString(),
            title: Title,
            amount: Amount,
            date: Date
        };
        props.SaveExpenseData(ExpenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={Title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={Amount} min="1" step="1"
                        onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={Date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="new-expense__actions">
                    <button type="submit" onClick={submitHandler}>Add Expense</button>
                </div >

            </div>
        </form>
    );
}