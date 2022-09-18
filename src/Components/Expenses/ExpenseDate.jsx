import React from 'react';
import './ExpenseDate.css';

export default function ExpenseDate(props){

    const month = props.dateconverted.toLocaleString('en-US', {month: 'long'});
    const year = props.dateconverted.getFullYear();
    const day = props.dateconverted.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{ month }</div>
            <div className="expense-date__year">{ year }</div>
            <div className="expense-date__day">{ day }</div>
        </div>
    );
}