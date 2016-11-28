import React from 'react';

import RootSelector from './RootSelector';


class ControlPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRoot: null,
      selectedChord: 'maj',
      chords: {
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
      }
    }
  }

  selectRoot(keyId) {
    this.setState({selectedRoot: keyId}, () => {
      const chord = this.state.chords[this.state.selectedChord];
      this.props.pressChord(chord, this.state.selectedRoot);
    });
  }

  selectChord(chord) {
    this.setState({selectedChord: chord}, ()=> {
      const chord = this.state.chords[this.state.selectedChord];
      this.props.pressChord(chord, this.state.selectedRoot);
    });
  }

  render() {
    return(
      <div className="ch-control-panel">
        <h1>Control Panel</h1>
        <RootSelector selectRoot={this.selectRoot.bind(this)} selectedRoot={this.state.selectedRoot} />
      </div>
    );
  }
}

ControlPanel.propTypes = {
  keys: React.PropTypes.array.isRequired,
  pressChord: React.PropTypes.func.isRequired,
};

export default ControlPanel;