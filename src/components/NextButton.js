import React from 'react';

const NextButton = (props) => {
  return (
    <div className="App-button" onClick={props.handleClick}>
      Next
    </div>
  )
 }

export default NextButton;