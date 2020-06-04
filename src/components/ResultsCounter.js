import React from 'react';

const ResultsCounter = (props) => {
  return (
    <div className="App-result-counter">
      {props.acceptCount} / {props.cautionCount + props.acceptCount}
    </div>
  )
 }

export default ResultsCounter;