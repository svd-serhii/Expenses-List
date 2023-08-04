import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  console.log(filteredYear);
  let filterTextInfo = "2020, 2021, 2022";
  console.log(filterTextInfo);

  if (filteredYear === "2022") {
    filterTextInfo = "2020, 2021, 2023";
  } else if (filteredYear === "2021") {
    filterTextInfo = "2020, 2022, 2023";
  } else if (filteredYear === "2020") {
    filterTextInfo = "2021, 2022, 2023";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <p>Data for years {filterTextInfo} is hidden</p>
        {props.data.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
