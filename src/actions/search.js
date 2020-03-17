import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';





const handleSearchChange = (query) => {

 const foo =  (dispatch) => {
   const options = {
     key: YOUTUBE_API_KEY,
     query: query
   }
   searchYouTube(options, (videos)=>{
     dispatch(changeVideo(videos[0]));
     //dispatch(videos(0));
     dispatch(changeVideoList(videos));
    });
    
  };

  return foo;
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleSearchChange;
