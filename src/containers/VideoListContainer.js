import React from 'react'
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (props) => (
    <VideoList videos={props.videos} handleVideoListEntryTitleClick={props.changeVideo}/>
);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapDispatchToProps = dispatch => {
    return {
      changeVideo : video => dispatch(changeVideo(video))
    }
}

const mapStateToProps = state => ({
    videos : state.videoList
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoListContainer);
