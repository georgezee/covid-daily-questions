import React from 'react';
import DateToday from './DateToday';
import AnswerButton from './AnswerButton';
import Question from './Question';
import NextButton from './NextButton';

class QuestionDisplay extends React.Component {

  // We want to return a pseudo-random number based on a certain seed.
  // stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
  seededRandom(seed) {
    seed++;
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  render() {
    let missingAnswersMessage = "";

    if (this.props.highlightMissing) {
      missingAnswersMessage = <div className="App-question-missing">Answer the missing questions to proceed.</div>
    }

    return (
      <div>
        <header className="App-header">
        <div>
          <DateToday/>
        </div>
        </header>
        <div className="App-main">
        {this.props.questions.map((itemArray, i) => {

          // Questions kept in an array to allow future alternate question phrasing per question.
          // Until then, we take the first item.
          let item = itemArray[0];

          let className = "App-question";
          if (this.props.highlightMissing) {
            if (this.props.answers[i] === "") {
              className += " App-question-missing";
            }
          }

          const acceptAnswer = <AnswerButton
            answerState={this.props.answers[i]}
            title={item.accepted}
            questionID={i}
            answerType={'accept'}
            handleAnswer={this.props.handleAnswer}
          />;

          const cautionAnswer = <AnswerButton
            answerState={this.props.answers[i]}
            title={item.cautioned}
            questionID={i}
            answerType={'caution'}
            handleAnswer={this.props.handleAnswer}
          />;

          let firstAnswer = acceptAnswer;
          let secondAnswer = cautionAnswer;

          // The seed changes every day, ensuring the button placement is not always consistent.
          let seed = i + new Date().getDate();
          // We have a 50% chance of switching the answers around.
          if (this.seededRandom(seed) > 0.5) {
            firstAnswer = cautionAnswer;
            secondAnswer = acceptAnswer;
          }

          return (
            <div key={i} className={className}>
              <Question title={item.question} />
              {firstAnswer}
              {secondAnswer}
            </div>
          )
        })}

        {missingAnswersMessage}
        <NextButton handleClick={this.props.handleClick}/>

        </div>
      </div>
    )
  }
 }

export default QuestionDisplay;