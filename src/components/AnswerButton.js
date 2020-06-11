import React from 'react';

const AnswerButton = ({title, answerState, handleAnswer, questionID, answerType}) => {

  function clickButton() {
    handleAnswer(questionID, answerType);
  }

  let className = "App-button";
  let icon = "";

  if (answerState === answerType) {
      className += " App-button-selected"

      // if (answerState === "accept") {
      //   icon = "✔️";
      // }

      // if (answerState === "caution") {
      //   icon = "⚠️";
      // }
  }

  return (
    <div className={className} onClick={clickButton}>
      {title} {icon}
    </div>
  )
 }

export default AnswerButton;