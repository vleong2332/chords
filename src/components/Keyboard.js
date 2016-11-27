import React from 'react';

import Octave from './Octave';


class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <Octave range={0} />
      </div>
    );
  }
}

export default Keyboard;