import React, { useState } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    console.log("Chart received data.");
    console.log(props.data);

    // For now lets have only one item per month...
    const values = props.data.map(dato => dato.value);
    const max = Math.max(...values);
    console.log(`Max Value is ${max}`);

    return (
    <div className='chart'>
      {props.data.map(dato => <ChartBar key={dato.label} value={dato.value} maxValue={max} label={dato.label} />)}  
    </div>
    );
}

export default Chart;