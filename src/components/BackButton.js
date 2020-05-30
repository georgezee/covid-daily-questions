import React from 'react';

const BackButton = (props) => {
  return (
    <div className="App-button" onClick={props.handleBack}>
      Back
    </div>
  )
 }

export default BackButton;