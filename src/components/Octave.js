import React from 'react';

import Key from './Key';


class Octave extends React.Component {
  render() {
    return (
      <div className="octave">
        <Key type="white" />
        <Key type="black" />
        <Key type="white" />
        <Key type="black" />
        <Key type="white" />
        <Key type="white" />
        <Key type="black" />
        <Key type="white" />
        <Key type="black" />
        <Key type="white" />
        <Key type="black" />
        <Key type="white" />
      </div>
    );
  }
}

Octave.propTypes = {
  range: React.PropTypes.oneOf([-1, 0, 1]).isRequired,
}

export default Octave;