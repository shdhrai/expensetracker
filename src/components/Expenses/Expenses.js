import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props){
    const expenses = props.items;
    // Used two way binding over here and what ever value we will give it will be reflected first as year.
    const [enteredYear, setEnteredYear] = useState("2019");

    const yearSelectHandler =(year)=>{
        setEnteredYear(year);
    };
    const filteredExpenses = expenses.filter((i)=>{return i.date.getFullYear() === Number(enteredYear)});

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selectedYear={enteredYear}
            onSelectYear={yearSelectHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList fexpenses={filteredExpenses}/>

        </Card>
      </div>
    );
}

export default Expenses;