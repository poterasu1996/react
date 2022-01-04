import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // first element = value itself, second element = the updated function
    const [title, setTitle] = useState(props.title);    // useState ALWAYS return an array with 2 elements

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>        
            <button onClick={clickHandler}>Change Title</button>    
        </Card>
    );
}

export default ExpenseItem;