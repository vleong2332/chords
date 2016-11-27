import React, { Component } from 'react';

import Keyboard from './components/Keyboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      keys: [
        {name: 'key00', sort: 0, type: 'white', pressed: false},
        {name: 'key01', sort: 1, type: 'black', pressed: false},
        {name: 'key02', sort: 2, type: 'white', pressed: false},
        {name: 'key03', sort: 3, type: 'black', pressed: false},
        {name: 'key04', sort: 4, type: 'white', pressed: false},
        {name: 'key05', sort: 5, type: 'white', pressed: false},
        {name: 'key06', sort: 6, type: 'black', pressed: false},
        {name: 'key07', sort: 7, type: 'white', pressed: false},
        {name: 'key08', sort: 8, type: 'black', pressed: false},
        {name: 'key09', sort: 9, type: 'white', pressed: false},
        {name: 'key10', sort: 10, type: 'black', pressed: false},
        {name: 'key11', sort: 11, type: 'white', pressed: false}
      ]
    }
  }

  pressKeys(keyArray) {
    const keys = [...this.state.keys];
    keyArray.forEach((keyName) => {
      const key = keys.find((keyObj) => keyObj.name === keyName);
      key.pressed = true;
    });
    this.setState({keys});
  }

  depressKeys(keyArray) {
    const keys = [...this.state.keys];
    keyArray.forEach((keyName) => {
      const key = keys.find((keyObj) => keyObj.name === keyName);
      key.pressed = false;
    });
    this.setState({keys});
  }

  depressAllKeys() {
    const keys = [...this.state.keys];
    keys.forEach((key) => {key.pressed = false;});
    this.setState({keys});
  }

  render() {
    return (
      <div className="chords-app">
        <Keyboard keys={this.state.keys} />
      </div>
    );
  }
}

export default App;
