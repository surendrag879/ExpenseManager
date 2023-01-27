import React, { useState } from "react";
import "./ExpenseForm.css";
import { useDispatch } from "react-redux";
import { addExpanse } from '../../reduxToolkit/expenseSlice'

const initialState = {
    title: '',
    amount: '',
    date: ''
}
export default function ExpenseForm(props) {
    const [values, setValues] = useState(initialState);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id: Date.now(),
            title: values.title,
            amount: values.amount,
            date: values.date,
        }
        // props.SaveExpenseData(ExpenseData);
        dispatch(addExpanse(obj))
        setValues(initialState);
    };

    return (
        <div className='new-expense'>
            <form>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            name='title'
                            type="text"
                            value={values.title}
                            onChange={handleChange} />
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            name='amount'
                            type="number"
                            value={values.amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            name='date'
                            type="date"
                            value={values.date}
                            onChange={handleChange} />
                    </div>

                    <div className="new-expense__actions">
                        <button type="submit" onClick={HandleSubmit}>
                            Add Expense
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
