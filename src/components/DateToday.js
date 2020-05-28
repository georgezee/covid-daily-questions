import React from 'react';

class DateToday extends React.Component {
  render() {
    let today = new Date();

    let dayOfWeek = today.toLocaleString('en-us', {  weekday: 'long' });
    let monthDay = today.toLocaleString('en-us', {  month: 'long' });
    monthDay = monthDay + " " + today.getDate();

    return (
     <div id="date" className="flex-item">
       <div>{dayOfWeek}</div>
       <div>{monthDay}</div>
      </div>
    );

  }
}

export default DateToday;

