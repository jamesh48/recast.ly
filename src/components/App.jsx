import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData,
      currentSearch: ''
    };

    this.options = {
      query: '',
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    let videoTitle = e.target.textContent;

    this.state.allVideos.forEach(video => {
      let title = video.snippet.title;

      if (title === videoTitle) {
        this.setState({currentVideo: video});
      }
    });
  }

  handleChange(e) {
    this.setState({currentSearch: e.target.value}, () => {
      this.options.query = this.state.currentSearch;
    });
  }

  loadData(data) {
    this.setState({
      allVideos: data,
      currentVideo: data[0]
    });
  }

  componentDidMount() {
    this.props.searchYouTube(this.options, this.loadData);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search callbackChange={this.handleChange}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList callbackClick={this.handleClick} videos={this.state.allVideos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
