import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData'


const initialState = exampleVideoData;
var videoListReducer = (state = initialState, action) => {
  //TODO: define a reducer for the videoList field of our state.
  return state;
};

export default videoListReducer;
