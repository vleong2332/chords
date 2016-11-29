import React from 'react';


class ChordSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      chords: {
        maj: {display: 'Maj', keys: [0, 4, 7]},
        min: {display: 'Min', keys: [0, 3, 7]},
        five: {display: '5', keys: [0, 7]},
        dom7: {display: 'Dom7', keys: [0, 4, 7, 10]},
        maj7: {display: 'Maj7', keys: [0, 4, 7, 11]},
        min7: {display: 'Min7', keys: [0, 3, 7, 10]},
        minMaj7: {display: 'MinMaj7', keys: [0, 3, 7, 11]},
        sus4: {display: 'Sus4', keys: [0, 5, 7]},
        sus2: {display: 'Sus2', keys: [0, 2, 7]},
        six: {display: '6', keys: [0, 4, 7, 9]},
        minSix: {display: 'Min6', keys: [0, 3, 7, 9]},
        nine: {display: '9', keys: [0, 2, 4, 7, 10]},
        minNine: {display: 'Min9', keys: [0, 2, 4, 7, 10]},
        majNine: {display: 'Maj9', keys: [0, 2, 4, 7, 11]},
        minMajNine: {display: 'MinMaj9', keys: [0, 2, 3, 7, 11]},
        elev: {display: '11', keys: [0, 2, 4, 5, 7, 10]},
      }
    };
  }

  isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }

  arraysAreEqual(arr1, arr2) {
    if (!this.isArray(arr1) || !this.isArray(arr2)) {
      console.error('One or both arguments is not an array', arr1, arr2);
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0, length = arr1.length; i < length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
      // console.log(index, arr2[index], el);
    return true;
  }

  renderButtons() {
    return Object.keys(this.state.chords).map((key, index) => {
      const chord = this.state.chords[key];
      console.log(chord.display, chord.keys, this.props.selectedChord, this.arraysAreEqual(chord.keys, this.props.selectedChord));
      const classNames = [
        'button',
        this.arraysAreEqual(chord.keys, this.props.selectedChord) ? 'selected' : null
      ];
      return(
        <div key={index} className="button-slot">
            <div
              key={key}
              className={classNames.join(' ').trim()}
              onClick={() => this.handleClick(chord.keys)}
            >
              {chord.display}
            </div>
        </div>
      );
    });
  }

  handleClick(keys) {
    this.props.selectChord(keys);
  }

  render() {
    return(
      <div className="ch-chord-selector">
        <h2 className="title">Variant</h2>
        <div className="button-wrapper">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

ChordSelector.propTypes = {
  selectChord: React.PropTypes.func.isRequired,
  selectedChord: React.PropTypes.array,
};

export default ChordSelector;
