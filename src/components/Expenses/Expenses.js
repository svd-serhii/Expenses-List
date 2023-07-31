import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.data.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
