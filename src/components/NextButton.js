import React from 'react';

const NextButton = (props) => {
  return (
    <div className="App-button App-button-large" onClick={props.handleClick}>
      Next
    </div>
  )
 }

export default NextButton;