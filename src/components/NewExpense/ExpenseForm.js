import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Instead of using multiple useState()we can use a single one by passing an object
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   //make sure the other data don't get lost and for that we manually have to set the other two data here
    //   ...userInput,
    //   enteredTitle: event.target.value
    //   //overridding key-value pair
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //problem here is that we need to depend on the previous state to copy in the existing value and overriding a certain value
    // so whenever there is such a situation we should not do like below
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // setUserInput( (prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // In many of the cases we often see the commented one might not work bcoz react schedules state update functions, it doesnt perform them instantly and we schedule a lot of function then we might not get the correct prev state values, but if we do like this react will always ensure that prevState value snapshot is the updated one(we always operate on the latest prev state snapshot) and all schedules are maintained properly(more safer)

    // });
  };
  const submitHandler = (event) => {
    event.preventDefault(); //will stop the loading of this page
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //two way binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
