import React from 'react';

import RootSelector from './RootSelector';
import ChordSelector from './ChordSelector';


class ControlPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRoot: null,
      selectedChord: [],
    }
  }

  selectRoot(keyId) {
    this.setState({selectedRoot: keyId}, () => {
      this.props.pressChord(this.state.selectedChord, this.state.selectedRoot);
    });
  }

  selectChord(chord) {
    this.setState({selectedChord: chord}, ()=> {
      this.props.pressChord(this.state.selectedChord, this.state.selectedRoot);
    });
  }

  render() {
    return(
      <div className="ch-control-panel">
        <RootSelector selectRoot={this.selectRoot.bind(this)} selectedRoot={this.state.selectedRoot} />
        <ChordSelector selectChord={this.selectChord.bind(this)} selectedChord={this.state.selectedChord} />
      </div>
    );
  }
}

ControlPanel.propTypes = {
  keys: React.PropTypes.array.isRequired,
  pressChord: React.PropTypes.func.isRequired,
};

export default ControlPanel;