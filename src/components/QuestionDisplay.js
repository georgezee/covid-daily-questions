import React from 'react';
import DateToday from './DateToday';
import AnswerButton from './AnswerButton';
import Question from './Question';
import NextButton from './NextButton';

const QuestionDisplay = ({questions}) => {
  return (
    <div>
      <header className="App-header">
      <p>
        <DateToday/>
      </p>
      </header>
      <div className="App-main">
      {questions.map((alternatives, i) => {
      return (
        <div>
          <Question key={i} title={alternatives[0].question} />
          <AnswerButton title={alternatives[0].accepted} />
          <AnswerButton title={alternatives[0].cautioned} />
        </div>
      )
      })}

      <NextButton/>

      </div>
    </div>
  )
 }

export default QuestionDisplay;