import React from 'react';
import DateToday from './DateToday';
import BackButton from './BackButton';

const StatusDisplay = ({status, handleBack}) => {

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
      <BackButton handleBack={handleBack}/>
    </div>
  )
 }

export default StatusDisplay;