import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class QuizCover extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
    
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets8.lottiefiles.com/packages/lf20_lh0a8oom.json"
     
      ></Player>
    );
  }
}

export default QuizCover;