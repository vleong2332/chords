import React, { Component } from 'react';

import Header from './components/Header';
import Keyboard from './components/Keyboard';
import ControlPanel from './components/ControlPanel';

class App extends Component {
    constructor() {
    super();
    this.state = {
      keys: [
        {id: 0, name: 'key00', type: 'white', pressed: false},
        {id: 1, name: 'key01', type: 'black', pressed: false},
        {id: 2, name: 'key02', type: 'white', pressed: false},
        {id: 3, name: 'key03', type: 'black', pressed: false},
        {id: 4, name: 'key04', type: 'white', pressed: false},
        {id: 5, name: 'key05', type: 'white', pressed: false},
        {id: 6, name: 'key06', type: 'black', pressed: false},
        {id: 7, name: 'key07', type: 'white', pressed: false},
        {id: 8, name: 'key08', type: 'black', pressed: false},
        {id: 9, name: 'key09', type: 'white', pressed: false},
        {id: 10, name: 'key10', type: 'black', pressed: false},
        {id: 11, name: 'key11', type: 'white', pressed: false}
      ]
    };
  };

  pressChord(chord, selectedRoot) {
    if (selectedRoot === null || selectedRoot < 0 || selectedRoot > 11 || !chord) {
      console.log('pressChord() cannot determine selected root and chord', selectedRoot, chord);
      return;
    }
    const transposedChord = chord.map(keyId => (keyId + selectedRoot) % 12);
    this.pressKeys(transposedChord);
  }

  pressKeys(keyIds) {
    const keys = [...this.state.keys];
    keys.forEach((key) => {
      key.pressed = keyIds.indexOf(key.id) !== -1;
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
        <Header title="Piano Chords" />
        <Keyboard keys={this.state.keys} />
        <ControlPanel
          keys={this.state.keys}
          pressChord={this.pressChord.bind(this)}
        />
      </div>
    );
  }
}

export default App;
