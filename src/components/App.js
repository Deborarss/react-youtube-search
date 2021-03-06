import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('captain marvel');
  }

  onSearchSubmit = async term => {
    // console.log(term);
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(res.data.items);
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = video => {
    // console.log('From the App!', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1.2rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
