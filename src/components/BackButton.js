import React from 'react';

const BackButton = (props) => {
  return (
    <div className="App-button App-button-large" onClick={props.handleBack}>
      Back
    </div>
  )
 }

export default BackButton;