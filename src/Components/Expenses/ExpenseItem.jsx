import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">

            <ExpenseDate dateconverted = {new Date(props.date)} />
            
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;