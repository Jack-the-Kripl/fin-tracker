import React, { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import './ExpensesContainer.css';

function ExpensesContainer(props) {
    const [selectedYear, setSelectedYear] = useState('');

    const handleYearChange = (value) => {
        setSelectedYear(value);
    }

    return (
        <div>
            <ExpensesFilter onChange={handleYearChange}/>
            <div>{selectedYear}</div>
            <Card className='expenses'>
                <ExpenseItem data={props.expenses[0]}/>
                <ExpenseItem data={props.expenses[1]}/>
                <ExpenseItem data={props.expenses[2]}/>
                <ExpenseItem data={props.expenses[3]}/>
            </Card>
        </div>
    )
}

export default ExpensesContainer;