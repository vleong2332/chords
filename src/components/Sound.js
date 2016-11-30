import React from 'react';


class Sound extends React.Component {
  constructor() {
    super();
    this.audio = {};
  }

  playChord() {
    if (!this.props.keys) {
      return;
    }

    for (var key in this.audio) {
      if (this.audio.hasOwnProperty(key)) {
        if (this.audio[key]) {
          this.audio[key].pause();
          this.audio[key].currentTime = 0;
        } 
      }
    }

    const pressedKeys = this.props.keys.filter(key => key.pressed);
    pressedKeys.forEach(key => this.audio[key.name].play());
  }

  render() {
    this.audio = {};
    return(
      <div className="ch-sound">
        {
          this.props.keys.map(key => {
            return <audio
              key={key.id}
              id={key.id}
              className="audio"
              src={key.srcAudio}
              ref={audio => this.audio[key.name] = audio}
            />
          }) 
        }
      </div>
    );
  }
}

export default Sound