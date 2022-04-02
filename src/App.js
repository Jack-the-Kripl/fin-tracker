import React, { useState } from 'react';
import ExpensesContainer from './components/ExpensesContainer/ExpensesContainer';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const dummyExpenses = [
  { title: 'Rent', amount: 4500, date: new Date(2021, 5, 12), id: '1' },
  { title: 'Booze', amount: 6000, date: new Date(2022, 2, 22), id: '2' },
  { title: 'Hoes', amount: 99999, date: new Date(2022, 1, 1), id: '3' },
  { title: 'Food', amount: 16.99, date: new Date(2022, 3, 15), id: '4' }
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const onSubmitHandler = (ed) => {
    console.log("App received new expense item");
    console.log(ed);
    setExpenses((previousExpenses) => {
      return [ed, ...previousExpenses]; // >>> Warning: Each child in a list should have a unique "key" prop. <<< Works when added key to ExpenseItem
    });
  }
  console.log("All expenses from app:");
  console.log(expenses);

  return (
    <div>
      <div>
        <h1>Title</h1>
        <div>
          <NewExpense onSubmitNewExpense={onSubmitHandler} />
        </div>
      </div>
      <ExpensesContainer expenses={expenses} />
    </div>
  );
}

export default App;
