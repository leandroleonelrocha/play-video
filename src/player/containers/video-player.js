import React,{ Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/Title';
import PlayPause from '../components/play-pause';
import Timer from '../../player/components/timer';
import VideoPlayerControls from '../../player/components/video-player-controls';
class VideoPlayer extends Component{
	state = {
		pause:true,
		duration:0,
	}
	togglePlay = (event) => {
		this.setState({
			pause:!this.state.pause
		})
	}
	componentDidMount(){
		pause: (!this.state.autoplay)
	}
	handleLoaderMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		})
	}
	render(){
		return (
				<VideoPlayerLayout>
					<Title
						title="Sarasa"
					 />
					 <VideoPlayerControls>
					 <PlayPause 
					 pause={this.state.pause}
					 handleClick={this.togglePlay} />
					 <Timer
					 	duration={this.state.duration} />
					 </VideoPlayerControls>
					 
					<Video 
						autoplay={this.props.autoplay}
						pause={this.state.pause}
						handleLoaderMetadata={this.handleLoaderMetadata}
						src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
					/>
				</VideoPlayerLayout>
			)
	}

}

export default VideoPlayer;