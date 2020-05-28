import React from 'react';
import DateToday from './DateToday';
import AnswerButton from './AnswerButton';
import Question from './Question';
import NextButton from './NextButton';

class QuestionDisplay extends React.Component {

  render() {
    return (
      <div>
        <header className="App-header">
        <div>
          <DateToday/>
        </div>
        </header>
        <div className="App-main">
        {this.props.questions.map((alternatives, i) => {
          return (
            <div key={i} className="App-question">
              <Question title={alternatives[0].question} />
              <AnswerButton answerState={this.props.answers[i]} title={alternatives[0].accepted} questionID={i} answerType={'accept'} handleAnswer={this.props.handleAnswer}/>
              <AnswerButton answerState={this.props.answers[i]} title={alternatives[0].cautioned} questionID={i} answerType={'caution'} handleAnswer={this.props.handleAnswer}/>
            </div>
          )
        })}

        <NextButton handleClick={this.props.handleClick}/>

        </div>
      </div>
    )
  }
 }

export default QuestionDisplay;