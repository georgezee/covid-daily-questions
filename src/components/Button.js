import React from 'react';

const Button = ({handleClick, title}) => {
  return (
    <div className="App-button" onClick={handleClick}>{title}</div>
  )
 }

export default Button;