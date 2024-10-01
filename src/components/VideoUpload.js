
import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const handleFileChange = (e) => setVideo(e.target.files[0]);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('video', video);

    axios.post('/api/upload', formData)
      .then(res => alert('Video uploaded successfully'))
      .catch(err => console.error(err));
  };

  return (
    <div className="upload-section">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default VideoUpload;
