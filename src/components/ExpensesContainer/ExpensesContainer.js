import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import './ExpensesContainer.css';

function ExpensesContainer(props) {

    return (
        <Card className='expenses'>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
            <ExpenseItem data={props.expenses[2]}/>
            <ExpenseItem data={props.expenses[3]}/>
        </Card>
    )
}

export default ExpensesContainer;