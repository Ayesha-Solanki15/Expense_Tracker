import React, { useState} from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  
  if(props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2> ;
  }

  return (<ul className='expense-list'>
    {
      props.items.map( (expense) => (
        <ExpenseItem
              key={expense.id}
              // to distinguish between lists
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
        />
      ))
    }
  </ul>)
};

export default ExpensesList;