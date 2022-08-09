import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickMe = () => {
    console.log("Clicked");
    setTitle("Updated Title");
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickMe}>Buttonn!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;