import React, { useState } from "react";
import "./Expenses";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });


  return (
    <div>
      <Card clasName="expenses">
        <ExpensesFilter
          slected={filterdYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
