import React from 'react';
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expense = (props) => {
    return (
        <Card className="expenses">
            {
                props.data.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                ))
            }
        </Card>
    );
}

export default Expense;