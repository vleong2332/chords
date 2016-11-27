import React from 'react';

import Key from './Key';


class Octave extends React.Component {
  render() {
    const whiteKeys = this.props.keys.filter((key) => key.type === 'white');
    const blackKeys = this.props.keys.filter((key) => key.type === 'black');
    return (
      <div className="ch-octave">
        <div className="ch-row white">
          {whiteKeys.map((key) => <Key key={key.name} name={key.name} type={key.type} pressed={key.pressed} />)}
        </div>
        <div className="ch-row black">
          {blackKeys.map((key) => <Key key={key.name} name={key.name} type={key.type} pressed={key.pressed} />)}
        </div>
      </div>
    );
  }
}

Octave.propTypes = {
  range: React.PropTypes.oneOf([-1, 0, 1]).isRequired,
  keys: React.PropTypes.array.isRequired,
}

export default Octave;