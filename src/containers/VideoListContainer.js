import React from 'react'
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (props) => (
    <VideoList videos={props.videos} handleVideoListEntryTitleClick={props.videoClick}/>
);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapDispatchToProps = dispatch => {
    return {
      videoClick: video => dispatch({ type: 'CHANGE_CURRENT_VIDEO', payload: video })
    }
}

export default connect(
    null,
    mapDispatchToProps
)(VideoListContainer);
