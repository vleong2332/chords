import React from 'react';


class Key extends React.Component {
  render() {
    const classNames = [
      'ch-key',
      this.props.name,
      this.props.pressed ? 'pressed' : null
    ];
    return(
      <div className={classNames.join(' ').trim()}>
      </div>
    );
  }
}

Key.propType = {
  type: React.PropTypes.string.isRequired,
  pressed: React.PropTypes.bool.isRequired
}

export default Key;