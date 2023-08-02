import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { nanoid } from "nanoid";

const NewExpense = (props) => {
  const savedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSavedExpenseData={savedExpenseData} />
    </div>
  );
};

export default NewExpense;
