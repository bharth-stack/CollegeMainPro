import React, { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expenses";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Cabs",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Travel", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Shopping",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Visits",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function Budget() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}
