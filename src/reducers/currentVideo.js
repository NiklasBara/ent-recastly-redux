import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData'


const initialState = exampleVideoData[0];


const currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  return action.type === 'CHANGE_CURRENT_VIDEO' ? {...action.payload} : state;
};

export default currentVideoReducer;
