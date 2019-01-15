import React, { Component } from 'react';
import './App.css';
import tasks from './tasks';
import Task from './comp/Task';
import CopiedCode from './comp/CopiedCode';

const reference = 'https://medium.freecodecamp.org/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks.tasks,
      copiedOnly: false
    }
  }

  logTasks = () => {
    console.log(this.state.tasks);
  }

  onDragStart = (e, i) => {
    console.log(`dragstart: ${i}`);
    e.dataTransfer.setData("id", i);
  }

  onDragOver = e => {
    e.preventDefault();
  }

  handleCopiedOnly = () => {
    this.setState({
      copiedOnly: !this.state.copiedOnly
    })
  }

  render() {
    const renderTasks = {
      conscientiousness: [],
      agreeableness: [],
      ['openness to experience']: [],
      neuroticism: [],
      extroversion: [],
      complete: []
    };
    this.state.tasks.forEach(t => {
      renderTasks[t.category].push(<Task
        name={t.name}
        ods={this.onDragStart}
        bg={t.bgcolor}
      />)
    })
    return (
      <div className="App">
        <button onClick={this.handleCopiedOnly}>
          click here to toggle only the copied code
        </button>
        {this.state.copiedOnly ? <CopiedCode /> : (
          <div className="code-not-really-copied-directly">
            <p>This tutorial comes from the article <a href={reference}>React.js:
            implement the drag and drop feature without using external
        libraries</a> by Rajesh Pillai on Free Code Camp</p>
            <h1>DRAG AND DROP DEMO</h1>
            <button onClick={this.logTasks}>Click to log tasks</button>
            <div className="conscientiousness">
              <span className="task-header">conscientiousness</span>
              {renderTasks.conscientiousness}
            </div>
            <div className="agreeableness">
              <span className="task-header">agreeableness</span>
              {renderTasks.agreeableness}
            </div>
            <div className="openness-to-experience">
              <span className="task-header">openness to experience</span>
              {renderTasks['openness to experience']}
            </div>
            <div className="neuroticism">
              <span className="task-header">neuroticism</span>
              {renderTasks.neuroticism}
            </div>
            <div className="extroversion">
              <span className="task-header">extroversion</span>
              {renderTasks.extroversion}
            </div>
            <div className="droppable"
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
            >
              <span className="task-header">COMPLETED</span>
              {renderTasks.complete}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
