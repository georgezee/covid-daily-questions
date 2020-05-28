import React from 'react';
import DateToday from './DateToday';

const StatusDisplay = ({status}) => {
  const colourOK = "#8CC152";
  return (
    <div className="App-main" style={{backgroundColor: colourOK}}>
      <DateToday/>
      {status}
    </div>
  )
 }

export default StatusDisplay;