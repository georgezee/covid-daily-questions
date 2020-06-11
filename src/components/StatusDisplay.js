import React from 'react';
import DateToday from './DateToday';
import BackButton from './BackButton';

const StatusDisplay = ({status, handleBack, acceptCount, cautionCount}) => {

  let statusClass = "App-main Status-display";
  let statusMessage = "";
  if (status === "ok") {
    statusClass += " Status-ok";
  } else {
    statusClass += " Status-caution";
    statusMessage = <div className="Status-message">Check</div>;
  }

  return (
    <div className={statusClass}>
      <DateToday/>
      {statusMessage}
      <BackButton handleBack={handleBack}/>
    </div>
  )
 }

export default StatusDisplay;