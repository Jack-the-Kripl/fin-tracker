import Date from '../Date/Date';
import Card from '../Card/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    console.log(props.data);

    return (
        <Card className='expense-item'>
            <Date date={props.data.date}/>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.amount} £</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;