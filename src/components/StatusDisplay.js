import React from 'react';
import DateToday from './DateToday';

const StatusDisplay = ({status}) => {

  let statusClass = "App-main";
  if (status === "ok") {
    statusClass += " Status-ok";
  } else {
    statusClass += " Status-caution";
  }

  return (
    <div className={statusClass}>
      <DateToday/>
      {status}
    </div>
  )
 }

export default StatusDisplay;