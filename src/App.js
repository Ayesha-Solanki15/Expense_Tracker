import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 345.67,
    date: new Date(2022, 12, 27),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 36.5,
    date: new Date(2022, 1, 20),
  },
  {
    id: "e3",
    title: "Bath Soap",
    amount: 90.53,
    date: new Date(2022, 7, 8),
  },
  {
    id: "e4",
    title: "Tissue",
    amount: 34,
    date: new Date(2022, 1, 2),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*  custom components starts with caps, lower case are built-in HTML elements and name should be same as the imported component*/}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementById('root').append(para);
// This is how we do in  regular js and is called a declaratie approach where we define everything




//The problem we face during rendering a list is that for React all the list items are identical and to add a new item React add it in the end and updates the values of all the items to match it with the contents of the original array...
//  for this we're adding a unique key to each item in Expense.js