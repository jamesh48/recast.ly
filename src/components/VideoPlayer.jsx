var VideoPlayer = (props) => {
  let video = props.video;

  if (video.id === undefined) {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3></h3>
          <div></div>
        </div>
      </div>
    );
  }

  let videoID = video.id.videoId;
  let newVideo = `https://www.youtube.com/embed/${videoID}`;

  let videoSnippet = video.snippet;
  let title = videoSnippet.title;
  let description = videoSnippet.description;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={newVideo} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
