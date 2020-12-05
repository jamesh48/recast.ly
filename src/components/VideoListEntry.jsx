var VideoListEntry = (props) => {
  let video = props.video;

  if (video.id === undefined) {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={props.callbackClick}></div>
          <div className="video-list-entry-detail"></div>
        </div>
      </div>
    );
  }

  let snippetInfo = video.snippet;
  let videoID = video.id.videoId;
  let thumbnailLink = snippetInfo.thumbnails.default.url;
  let title = snippetInfo.title;
  let description = snippetInfo.description;

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={thumbnailLink} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={props.callbackClick}>{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );
};

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoListEntry;
