import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      // currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData,
      currentSearch: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target);
    let videoTitle = e.target.textContent;
    for (let i = 0; i < this.state.allVideos.length; i++) {
      let video = this.state.allVideos[i];
      let title = this.state.allVideos[i].snippet.title;

      if (title === videoTitle) {
        this.setState({currentVideo: video});
      }
    }
  }

  handleChange(e) {
    this.setState({currentSearch: e.target.value}, () => { console.log('currentSearch state- -> ' + this.state.currentSearch); });
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
//
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
