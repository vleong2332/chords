import React, { Component } from 'react';

import Header from './components/Header';
import Keyboard from './components/Keyboard';
import ControlPanel from './components/ControlPanel';
import Sound from './components/Sound';

import midC from './sound/040.wav';
import midCSharp from './sound/041.wav';
import midD from './sound/042.wav';
import midDSharp from './sound/043.wav';
import midE from './sound/044.wav';
import midF from './sound/045.wav';
import midFSharp from './sound/046.wav';
import midG from './sound/047.wav';
import midGSharp from './sound/048.wav';
import midA from './sound/049.wav';
import midASharp from './sound/050.wav';
import midB from './sound/051.wav';


class App extends Component {
    constructor() {
    super();
    this.state = {
      keys: [
        {id: 0, name: 'key00', type: 'white', pressed: false, srcAudio: midC},
        {id: 1, name: 'key01', type: 'black', pressed: false, srcAudio: midCSharp},
        {id: 2, name: 'key02', type: 'white', pressed: false, srcAudio: midD},
        {id: 3, name: 'key03', type: 'black', pressed: false, srcAudio: midDSharp},
        {id: 4, name: 'key04', type: 'white', pressed: false, srcAudio: midE},
        {id: 5, name: 'key05', type: 'white', pressed: false, srcAudio: midF},
        {id: 6, name: 'key06', type: 'black', pressed: false, srcAudio: midFSharp},
        {id: 7, name: 'key07', type: 'white', pressed: false, srcAudio: midG},
        {id: 8, name: 'key08', type: 'black', pressed: false, srcAudio: midGSharp},
        {id: 9, name: 'key09', type: 'white', pressed: false, srcAudio: midA},
        {id: 10, name: 'key10', type: 'black', pressed: false, srcAudio: midASharp},
        {id: 11, name: 'key11', type: 'white', pressed: false, srcAudio: midB}
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
    this.setState({keys}, this.sound.playChord.bind(this.sound));
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
        <Sound keys={this.state.keys} ref={el => this.sound = el} />
      </div>
    );
  }
}

export default App;
