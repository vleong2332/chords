import React from 'react';

import RootSelector from './RootSelector';


class ControlPanel extends React.Component {
  render() {
    return(
      <div className="ch-control-panel">
        <h1>Control Panel</h1>
        <RootSelector selectedRoot={this.props.selectedRoot} selectRoot={this.props.selectRoot} />
      </div>
    );
  }
}

ControlPanel.propTypes = {
  selectedRoot: React.PropTypes.oneOf([...Array(12).keys()]).isRequired,
  selectRoot: React.PropTypes.func.isRequired,
};

export default ControlPanel;