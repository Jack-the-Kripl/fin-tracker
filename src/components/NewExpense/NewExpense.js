import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [formState, setFormState] = useState('hidden');

    const onSubmitHandler = (ed) => {
        const expenseData = {
            ...ed,
            id: Math.random().toString()
        };

        props.onSubmitNewExpense(expenseData);

        handleFormStateChange();
    }

    const handleFormStateChange = () => {
        if (formState == 'hidden') {
            setFormState('');
        } else {
            setFormState('hidden');
        }
    }

    if (formState == 'hidden') {
        return (
        <div className="new-expense">
            <button onClick={handleFormStateChange}>Add New Expense</button>
        </div>
        )
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={onSubmitHandler} onCancel={handleFormStateChange} />
        </div>
    );
}

export default NewExpense;