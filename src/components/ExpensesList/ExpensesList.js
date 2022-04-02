import React, {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses this year...</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(expense => <ExpenseItem data={expense} key={expense.id} />)}
        </ul>
    )
}

export default ExpensesList;