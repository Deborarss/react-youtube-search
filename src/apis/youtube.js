import axios from 'axios';

const KEY = 'AIzaSyDCDXQfZh9HHvASF5osmWUIfDgqzHH6M5M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
