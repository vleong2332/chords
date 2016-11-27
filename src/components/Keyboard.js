import React from 'react';

import Octave from './Octave';


class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <Octave range={-1} keys={this.props.keys} />
        <Octave range={0} keys={this.props.keys} />
        <Octave range={1} keys={this.props.keys} />
      </div>
    );
  }
}

Keyboard.propTypes = {
	keys: React.PropTypes.array.isRequired,
}

export default Keyboard;