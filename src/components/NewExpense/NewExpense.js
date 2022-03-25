import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSubmitHandler = (ed) => {
        const expenseData = {
            ...ed,
            id: Math.random().toString()
        };

        props.onSubmitNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={onSubmitHandler} />
        </div>
    );
}

export default NewExpense;