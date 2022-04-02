import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: ""
    // });

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, title: e.target.value};
        // });
    };
    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, amount: e.target.value};
        // });
    };
    const handleChangeDate = (e) => {
        setDate(e.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, date: e.target.value};
        // });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '' || amount === '' || date === '') {
            alert("Fill the form properly, asshole...");
        } else {
            const expenseData = {
                title: title,
                amount: parseInt(amount),
                date: new Date(date)
            }
    
            props.onSubmit(expenseData);
            setTitle("");
            setAmount("");
            setDate("");
        }
    };

    const handleCancel = () => {
        props.onCancel();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={handleChangeTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={handleChangeAmount} min='0.01' step='0.01'/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={handleChangeDate} min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type='button' onClick={handleCancel} >Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;