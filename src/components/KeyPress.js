import React from 'react';

class KeyPress extends React.Component {
  componentDidMount() {
    this.$el.play();
  }
  componentDidUpdate() {
    const { pressed } = this.props.pianoKey;
    if (pressed) {
      this.$el.currentTime = 0;
      this.$el.play();
    }
  }
  render() {
    const { srcAudio } = this.props.pianoKey;
    return(
      <audio src={srcAudio} ref={$el => this.$el = $el} />
    );
  }
}

export default KeyPress