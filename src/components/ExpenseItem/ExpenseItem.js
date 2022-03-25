import React, { useState } from 'react';
import Date from '../Date/Date';
import Card from '../Card/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    //console.log(props.data);

    const [title, setTitle] = useState(props.data.title);

    function handleClick() {
        setTitle(`${title} Updated`);
    }

    return (
        <Card className='expense-item'>
            <Date date={props.data.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.data.amount} £</div>
            </div>
            <button onClick={handleClick}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;