import React from 'react';
import './App.css';

import QuestionDisplay from './components/QuestionDisplay';
import StatusDisplay from './components/StatusDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStatus: "questions",
      questions: [
        [
          {
            "question" : "Do you have a high temperature?",
            "accepted" : "No",
            "cautioned" : "Yes",
          }
        ],
        [
          {
            "question" : "Do you have a cough?",
            "accepted" : "No",
            "cautioned" : "Yes",
          }
        ],
        [
          {
            "question" : "Do you have a sore throat?",
            "accepted" : "No",
            "cautioned" : "Yes",
          }
        ],
        [
          {
            "question" : "Do you feel week and tired today?",
            "accepted" : "Yes",
            "cautioned" : "No",
          }
        ],
        [
          {
            "question" : "Do you have difficulty breathing?",
            "accepted" : "No",
            "cautioned" : "Yes"
          },
          // Alternate Question
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
        [
          {
            "question" : "Can you smell normally?",
            "accepted" : "Yes",
            "cautioned" : "No",
          }
        ],
        [
          {
            "question" : "Have you been in contact with anyone who has tested positive for Covid 19 within the past 14 days?",
            "accepted" : "No",
            "cautioned" : "Yes",
          }
        ],
        [
          {
            "question" : "Are any members of your household suffering from any of these symptoms?",
            "accepted" : "No",
            "cautioned" : "Yes",
          }
        ],
      ]
    };
  }

  checkAnswers = () => {
    this.setState({ displayStatus: "ok" });
  };

  render() {

    let output = '';
    if (this.state.displayStatus === "questions") {
      output = <QuestionDisplay questions={this.state.questions} handleClick={this.checkAnswers} />;
    } else {
      output = <StatusDisplay status={this.state.displayStatus}/>;
    }
    return (
          <div className="App">
           {output}
          </div>
        );
  }
}

export default App;
