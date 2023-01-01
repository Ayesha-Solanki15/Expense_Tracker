import React, {useState} from 'react' ;
//named import
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  // we get only one parameters and that one parameter will hold all the arguments received as properties and hence called as props(we get key value pairs)
  // const month = props.date.toLocaleString('en-US',{month: 'long'});
  // const year = props.date.getFullYear();
  // const day= props.date.toLocaleString('en-US',{day: '2-digit'});
  const [title, setTitle] =useState(props.title);//initial value of variable passed
  // useState returns an array where the 1st value is the variable that points to the passed value and 2nd is the function that can update the value
  // react hooks starts with 'use' keyword and they can only be used inside the component and not outside it or within another function
  
  const clickHandler = () => {
    setTitle('Updated');//we pass the new value in the function that will change the value of the variable that points to the passed value
    // The importance of calling this updated function is that it not only updates the value but also executes the component and thats exactly we want...
    console.log(title);//the old value will bw logged at first because it get scheduled to some time later
    // states is separated on per component instance basis and it gets created for every expenseItem thats why other items are not getting affected by change in other item
  };
  return (
    <li className='list_design'>
    <Card className="expense-item">
      {/* <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* or <ExpenseDate /> if it has nothing written betwween opening and closing tags */}

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={clickHandler}
      >Click me</button>
      {/* we dont write clichHandler() because it will be executed when this JSX is parsed not not when the button is clicked, we just pass the pointer to function which determines what to execute when the click occurs */}
    </Card>
    </li>
  );
  //All the on... event handlers are props
  // Return statement must have only one root element that's going to be returned
  //Can't use components as a wrapper around another components, but React has a soln for that where we can use our component as a wrapper component
}
export default ExpenseItem;
