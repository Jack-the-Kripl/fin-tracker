import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import ExpensesContainer from './components/ExpensesContainer/ExpensesContainer';
import './App.css';

function App() {
  const expenses = [
    {title: 'Rent', amount: 4500, date: new Date(2021,5,12)},
    {title: 'Booze', amount: 6000, date: new Date(2022,2,22)},
    {title: 'Hoes', amount: 99999, date: new Date(2022,1,1)},
    {title: 'Food', amount: 16.99, date: new Date(2022,3,15)}
  ];
  return (
    <div>
      <div>
        <h1>Title</h1>
      </div>
        <ExpensesContainer expenses={expenses}/>
    </div>
  );
}

export default App;
