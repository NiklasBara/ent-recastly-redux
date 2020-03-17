import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData'


const initialState = exampleVideoData;
var videoListReducer = (state = initialState, action) => {
  console.log(action);
  return action.type === `CHANGE_VIDEO_LIST` ? action.payload : state;
};

export default videoListReducer;
