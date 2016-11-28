import React from 'react';


class RootSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonArrangements: [
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
      ]
    };
  }

  renderButtons() {
    return this.state.buttonArrangements.map((notes, index) => (
      <div key={index} className="button-slot">
        {notes.map(note => {
          const classNames = [
            'button',
            index === this.props.selectedRoot ? 'selected' : null
          ];
          return (
            <div key={note} className={classNames.join(' ').trim()} onClick={() => this.handleClick(index)}>{note}</div>
          )
        })}
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
  selectRoot: React.PropTypes.func.isRequired,
  selectedRoot: React.PropTypes.number,
};

export default RootSelector;
