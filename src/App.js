import React, { Component } from 'react';
import './App.css';

import Keyboard from './components/Keyboard';

class App extends Component {
  render() {
    return (
      <div className="chords-app">
        <Keyboard />
      </div>
    );
  }
}

export default App;
