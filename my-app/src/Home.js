import React, { Component } from 'react';
import {YouTube} from './components/YouTube';
import {SectionsContainer, Section} from 'react-fullpage';

const videoIdA = 'ppluOvYerHM';
const videoIdB = '-DX3vJiqxm4';
export class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        videoId: videoIdA,
        player: null,
      };

      this.onReady = this.onReady.bind(this);
      this.onChangeVideo = this.onChangeVideo.bind(this);
      this.onPlayVideo = this.onPlayVideo.bind(this);
      this.onPauseVideo = this.onPauseVideo.bind(this);
    }

    onReady(event) {
      this.setState({
        player: event.target.playVideo(),
      });
    }

    onPlayVideo() {
      this.state.player.playVideo();
    }

    onPauseVideo() {
      this.state.player.pauseVideo();
    }

    onChangeVideo() {
      this.setState({
        videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
      });
  }
  componentWillMount() {
      setInterval(() => {
           this.loopStart();
      }, 30000)
  }
  loopStart() {
            this.state.player.playVideo();
            this.state.player.mute();
   }
 
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingleft:    '0px',
      sectionPaddingright:   '0px'
    };
    return (
        <div id="video_container">
          <div className="video_bg">
            <div id="player">
              <YouTube videoId={this.state.videoId} onReady={this.onReady} />
            </div>
          </div>
        </div>
        <div className="fullPage_Wrapper">
         <SectionsContainer className="container-fluid" {...options} style={{"padding": '0'}}>
            <Section className="custom-section" color="#0F1426"></Section>
            
          </SectionsContainer>
        </div>
    );
  }
}

// export default App;
