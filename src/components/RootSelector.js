import React from 'react';


class RootSelector extends React.Component {
  getButtonArrangement() {
    return [
      ['C'],
      ['C#', 'Db'],
      ['D'],
      ['D#', 'Eb'],
      ['E'],
      ['F'],
      ['F#', 'Gb'],
      ['G'],
      ['G#', 'Ab'],
      ['A'],
      ['A#', 'Bb'],
      ['B'],
    ];
  }

  renderButtons() {
    const buttonArrangements = this.getButtonArrangement();
    return buttonArrangements.map((notes, index) => (
      <div key={index} className="button-slot">
        {
          notes.map(note => {
            const classNames = [
              'button',
              index === this.props.selectedRoot ? 'selected' : null
            ];
            return (
              <div key={note} className={classNames.join(' ').trim()} onClick={() => this.handleClick(index)}>{note}</div>
            )
          })
        }
      </div>
    ));
  }

  handleClick(id) {
    this.props.selectRoot(id);
  }

  render() {
    return(
      <div className="ch-root-selector">
        <h2>Root Selector</h2>
        <div className="button-wrapper">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

RootSelector.propTypes = {
  selectedRoot: React.PropTypes.oneOf([...Array(12).keys()]).isRequired,
  selectRoot: React.PropTypes.func.isRequired,
};

export default RootSelector;
