import React, { useState } from 'react';
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../Chart/ExpensesChart';
import './ExpensesContainer.css';
import '../../App.css';

function ExpensesContainer(props) {
    const [selectedYear, setSelectedYear] = useState('All');
    let filteredExpenses;
    selectedYear === 'All' ? (filteredExpenses = props.expenses) : (
        filteredExpenses = props.expenses.filter(expense => {
            return expense.date.getFullYear() == selectedYear
        })
    );

    console.log("Filtered expenses from container:");
    console.log(filteredExpenses);

    const handleYearChange = (value) => {
        setSelectedYear(value);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={selectedYear} onChange={handleYearChange}/>
                <div className='text-white'>{selectedYear}</div>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default ExpensesContainer;