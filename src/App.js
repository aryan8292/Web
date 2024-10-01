
import React from 'react';
import VideoUpload from './components/VideoUpload';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <h1>Video Upload Platform</h1>
      <VideoUpload />
      <VideoList />
    </div>
  );
}

export default App;
