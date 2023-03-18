import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class HomeCover extends React.Component {
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
        src="https://assets5.lottiefiles.com/packages/lf20_9w7xsnud.json"
        style={
            {
              // height:'100%',
              // width:'100%'
    }
}
      ></Player>
    );
  }
}

export default HomeCover;