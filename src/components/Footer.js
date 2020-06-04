import React from 'react';

const Footer = ({handleClick}) => {
  return (
    <div className="App-footer">
      <div className="App-button" onClick={handleClick}>About</div>
    </div>
  )
 }

export default Footer;