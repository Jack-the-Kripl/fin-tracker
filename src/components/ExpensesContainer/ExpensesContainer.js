import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesContainer.css';

function ExpensesContainer(props) {

    return (
        <div className='expenses'>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
            <ExpenseItem data={props.expenses[2]}/>
            <ExpenseItem data={props.expenses[3]}/>
        </div>
    )
}

export default ExpensesContainer;