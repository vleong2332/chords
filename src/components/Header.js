import React from 'react';


class Header extends React.Component {
  render() {
    return(
      <div className="ch-header">
        <h1 className="title">{this.props.title}</h1>
      </div>
    );
  }
}

Header.propType = {
}

export default Header;