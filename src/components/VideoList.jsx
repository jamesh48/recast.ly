import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (

  <div className="video-list">

    {props.videos.map(video => {
      let videoID = video.id.videoId;
      let videoTitle = video.snippet.title;
      let videoDescription = video.snippet.description;
      return <VideoListEntry callbackClick={props.callbackClick} key={videoID} video={video} />;
    })}

  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
