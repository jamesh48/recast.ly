var VideoListEntry = (props) => {
  let video = props.video;
  let snippetInfo = video.snippet;
  let videoID = video.id.videoId;
  let thumbnailLink = snippetInfo.thumbnails.default.url;
  let title = snippetInfo.title;
  let description = snippetInfo.description;
  let data = {'videoId': videoID, 'title': title, 'description': description};

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

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
