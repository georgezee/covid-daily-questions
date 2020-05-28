import React from 'react';
import './App.css';
import DateToday from './components/DateToday';
import AnswerButton from './components/AnswerButton';
import Question from './components/Question';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        [
          {
            "question" : "Do you have difficulty breathing?",
            "accepted" : "No",
            "cautioned" : "Yes"
          },
          {
            "question" : "Does your breathing feel normal?",
            "accepted" : "Yes",
            "cautioned" : "No"
          }
        ],
        [
          {
            "question" : "Can you taste food and drinks normally?",
            "accepted" : "Yes",
            "cautioned" : "No",
          }
        ],
      ]
    };
  }

  render() {
    let questions = this.state.questions;
    return (
          <div className="App">
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
            </div>
          </div>
        );
  }
}

export default App;
