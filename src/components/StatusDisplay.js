import React from 'react';
import DateToday from './DateToday';
import ResultsCounter from './ResultsCounter';
import BackButton from './BackButton';

const StatusDisplay = ({status, handleBack, acceptCount, cautionCount}) => {

  let statusClass = "App-main Status-display";
  if (status === "ok") {
    statusClass += " Status-ok";
  } else {
    statusClass += " Status-caution";
  }

  return (
    <div className={statusClass}>
      <DateToday/>
      {status}
      <ResultsCounter acceptCount={acceptCount} cautionCount={cautionCount}/>
      <BackButton handleBack={handleBack}/>
    </div>
  )
 }

export default StatusDisplay;