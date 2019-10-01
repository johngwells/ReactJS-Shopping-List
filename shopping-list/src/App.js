import React, { useState } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Hello World',
      count: 0
    };
  }

  alertTime = () => {
    alert(this.state.title);
  }

  increment = () => {
    this.setState(
      (prevState) => {
        return { count: prevState.count + 1 }
      },
    () => console.log(this.state.count)
    )
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.alertTime}>what time is it?</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;
