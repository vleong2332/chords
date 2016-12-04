import React from 'react';


class ChordSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      chords: {
        0: {display: 'maj', keys: [0, 4, 7]},
        1: {display: 'min', keys: [0, 3, 7]},
        2: {display: '5', keys: [0, 7]},
        3: {display: 'dom7', keys: [0, 4, 7, 10]},
        4: {display: 'maj7', keys: [0, 4, 7, 11]},
        5: {display: 'min7', keys: [0, 3, 7, 10]},
        6: {display: 'minmaj7', keys: [0, 3, 7, 11]},
        7: {display: 'sus4', keys: [0, 5, 7]},
        8: {display: 'sus2', keys: [0, 2, 7]},
        9: {display: '6', keys: [0, 4, 7, 9]},
        10: {display: 'min6', keys: [0, 3, 7, 9]},
        11: {display: '9', keys: [0, 2, 4, 7, 10]},
        12: {display: 'min9', keys: [0, 2, 3, 7, 10]},
        13: {display: 'maj9', keys: [0, 2, 4, 7, 11]},
        14: {display: 'minmaj9', keys: [0, 2, 3, 7, 11]},
        15: {display: '11', keys: [0, 2, 4, 5, 7, 10]},
        16: {display: 'min11', keys: [0, 2, 3, 5, 7, 10]},
        17: {display: 'maj11', keys: [0, 2, 4, 5, 7, 11]},
        18: {display: 'minmaj11', keys: [0, 2, 3, 5, 7, 11]},
        19: {display: '13', keys: [0, 2, 4, 7, 9, 10]},
        20: {display: 'min13', keys: [0, 2, 3, 7, 9, 10]},
        21: {display: 'maj13', keys: [0, 2, 4, 7, 9, 11]},
        22: {display: 'minmaj13', keys: [0, 2, 3, 7, 9, 11]},
        23: {display: 'add9', keys: [0, 2, 4, 7]},
        24: {display: 'minadd9', keys: [0, 2, 3, 7]},
        25: {display: '6add9', keys: [0, 2, 4, 7, 9]},
        26: {display: 'min6add9', keys: [0, 2, 3, 7, 9]},
        27: {display: 'dom7add11', keys: [0, 4, 5, 7, 10]},
        28: {display: 'maj7add11', keys: [0, 4, 5, 7, 11]},
        29: {display: 'min7add11', keys: [0, 3, 5, 7, 10]},
        30: {display: 'minmaj7add11', keys: [0, 3, 5, 7, 11]},
        31: {display: 'dom7add13', keys: [0, 4, 7, 9, 10]},
        32: {display: 'maj7add13', keys: [0, 4, 7, 9, 11]},
        33: {display: 'min7add13', keys: [0, 3, 7, 9, 10]},
        34: {display: 'minmaj7add13', keys: [0, 3, 7, 9, 11]},
        35: {display: '7b5', keys: [0, 4, 6, 10]},
        36: {display: '7#5', keys: [0, 4, 8, 10]},
        37: {display: '7b9', keys: [0, 1, 4, 7, 10]},
        38: {display: '7#9', keys: [0, 3, 4, 7, 10]},
        39: {display: '7#5b9', keys: [0, 1, 4, 8, 10]},
        40: {display: 'min7b5', keys: [0, 3, 6, 10]},
        41: {display: 'min7#5', keys: [0, 3, 8, 10]},
        42: {display: 'min7b9', keys: [0, 1, 3, 7, 10]},
        43: {display: '9#11', keys: [0, 2, 4, 6, 7, 10]},
        44: {display: '9b13', keys: [0, 2, 4, 7, 8, 10]},
        45: {display: '6sus4', keys: [0, 5, 7, 9]},
        46: {display: '7sus4', keys: [0, 5, 7, 10]},
        47: {display: 'maj7sus4', keys: [0, 5, 7, 11]},
        48: {display: '9sus4', keys: [0, 2, 5, 7, 10]},
        49: {display: 'maj9sus4', keys: [0, 2, 5, 7, 11]},
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
      // console.log(chord.display, chord.keys, this.props.selectedChord, this.arraysAreEqual(chord.keys, this.props.selectedChord));
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
