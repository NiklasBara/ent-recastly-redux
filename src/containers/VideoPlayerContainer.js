import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const VideoPlayerContainer = (props) => (
    <VideoPlayer video={props.currentVideo}/>
);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = state => ({
    currentVideo : state.currentVideoReducer
});


export default connect(
    mapStateToProps
)(VideoPlayerContainer);
