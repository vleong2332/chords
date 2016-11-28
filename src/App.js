import React, { Component } from 'react';

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
      ],
      selectedRoot: 0,
      selectedChord: 'maj'
    }
    // this.selectRoot = this.selectRoot.bind(this);
  }

  chords = {
    maj: [0, 4, 7],
    min: [0, 3, 7],
    five: [0, 7],
    dom7: [0, 4, 7, 10],
    maj7: [0, 4, 7, 11],
    min7: [0, 3, 7, 10],
    minMaj7: [0, 3, 7, 11],
    sus4: [0, 4, 7],
    sus2: [0, 2, 7],
    six: [0, 4, 7, 9],
    minSix: [0, 3, 7, 9],
    nine: [0, 2, 4, 7, 10],
    minNine: [0, 2, 4, 7, 10],
    majNine: [0, 2, 4, 7, 11],
    minMajNine: [0, 2, 3, 7, 11],
    elev: [0, 2, 4, 5, 7, 10],
  };

  componentWillMount() {
    this.pressChord();
  }

  selectRoot(id) {
    this.setState({selectedRoot: id}, () => {this.pressChord()});
  }

  pressChord() {
    const selectedRoot = this.state.selectedRoot || 0;
    const chord = this.chords[this.state.selectedChord] || this.chords['maj'];
    const transposedChord = chord.map(keyId => (keyId + selectedRoot) % 12);

    this.depressAllKeys();
    this.pressKeys(transposedChord);
  }

  pressKeys(idArray) {
    const keys = [...this.state.keys];
    idArray.forEach((keyId) => {
      const key = keys.find((keyObj) => keyObj.id === keyId);
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
        <ControlPanel selectedRoot={this.state.selectedRoot} selectRoot={this.selectRoot.bind(this)} />
      </div>
    );
  }
}

export default App;
