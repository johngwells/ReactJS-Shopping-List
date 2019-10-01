import React, { useState } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Hello World'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <h2>Start some magic</h2>
      </div>
    );
  }
}

export default App;
