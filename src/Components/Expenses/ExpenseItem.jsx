import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';

const ExpenseItem = (props) => {
    // const [Title, setTitle] = useState('');
    // const [title, setnewTitle] = useState(props.title);

    // const changehandlar =(event)=>{
    //     setTitle(event.target.value)
    // }
    // const clickhandlar = ()=>{
    //     setnewTitle(Title)
    //     console.log(Title);
    // }

    
    return (
        <Card className="expense-item">

            <ExpenseDate dateconverted = {new Date(props.date)} />
            
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.amount }</div>

                {/* <input type='text' value={Title} onChange={changehandlar}/> */}
                {/* <button onClick={clickhandlar}>Change Title</button> */}

            </div>
        </Card>
    );
}

export default ExpenseItem;