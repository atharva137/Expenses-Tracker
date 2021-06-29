import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {
         props.items.map((event) => (
          <ExpenseItem
            key={event.id}
            title={event.title}
            amount={event.amount}
            date={event.date}
          ></ExpenseItem>
        ))
      }
    </ul>
  );
};

export default ExpensesList;
