import React from 'react';


class Key extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const className = `key ${this.props.type}`;
    return(
      <div className={className}>

      </div>
    );
  }
}

Key.propType = {
  type: React.PropTypes.string.isRequired,
}

export default Key;