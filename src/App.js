import React from 'react';
import './App.css';

import QuestionDisplay from './components/QuestionDisplay';
import StatusDisplay from './components/StatusDisplay';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    var questionList = require('./Questions.json');
    // Create an empty list of answers matching the question count.
    var answerList = questionList.map((item, i) => {return ""});

    let todaysDate = new Date().getDate();
    this.state = {
      displayStatus: "questions",
      highlightMissing: false,
      answers: answerList,
      questions: questionList,
      dayCompleted: todaysDate,
      aboutDisplay: false,
    };

    // Set up event handler to check date change on focus event.
    const self = this;
    window.addEventListener("focus", function(event)
    {
      const dateNow = new Date().getDate();
      // Reset the page if the date changes.
      if (dateNow !== self.state.dayCompleted) {
        self.setState({
          displayStatus: "questions",
          highlightMissing: false,
          answers: answerList,
          dayCompleted: dateNow
        });
      }
    }, false);
  }

  checkAnswers = () => {
    let acceptCount = 0;
    let cautionCount = 0;
    let emptyCount = 0;

    // Ensure todays date is saved.
    this.setState({dayCompleted: new Date().getDate()});

    for (var i = 0; i < this.state.answers.length; i++) {
      if (this.state.answers[i] === "accept") {
        acceptCount++;
      } else if (this.state.answers[i] === "caution") {
        cautionCount++;
      } else {
        emptyCount++;
      }
    }

    console.log(acceptCount + "|" + cautionCount + "|" + emptyCount);
    if (emptyCount > 0) {
      console.log("Not all questions answered!");
      this.setState({highlightMissing: true});
      return;
    } else if (cautionCount > 0) {
      this.setState({ displayStatus: "caution", acceptCount: acceptCount, cautionCount: cautionCount });
      return;
    } else {
      this.setState({ displayStatus: "ok", acceptCount: acceptCount, cautionCount: cautionCount });
      return;
    }

  };

  handleAnswer = (questionID, answerStatus) => {
    let answers = [...this.state.answers];
    answers[questionID] = answerStatus;
    this.setState({answers});

    if (this.state.highlightMissing) {
      for (var i = 0; i < answers.length; i++) {
        if (answers[i] === "") {
          return;
        }
      }
      // If we reached here, there are no missing answers.
      this.setState({highlightMissing: false});
    }
  }

  handleAboutClick = () => {
    const currentState = this.state.aboutDisplay;
    // Toggle the visibility of the About block.
    this.setState({aboutDisplay:!currentState});
  }

  switchDisplay = () => {
    this.setState({ displayStatus: "questions" });
  }

  render() {

    let output = '';
    if (this.state.displayStatus === "questions") {
      output = <QuestionDisplay
        questions={this.state.questions}
        answers={this.state.answers}
        handleAnswer={this.handleAnswer}
        handleClick={this.checkAnswers}
        highlightMissing={this.state.highlightMissing}
      />;
    } else {
      output = <StatusDisplay
        status={this.state.displayStatus}
        handleBack={this.switchDisplay}
        acceptCount={this.state.acceptCount}
        cautionCount={this.state.cautionCount}
      />;
    }
    return (
          <div className="App">
           {output}
           <AboutPage visible={this.state.aboutDisplay} handleClick={this.handleAboutClick}/>
           <Footer handleClick={this.handleAboutClick}/>
          </div>
        );
  }
}

export default App;
