import React from 'react';
import BannerImage from './component/BannerImages';
import AlbumMaker from './component/AlbumMaker';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to Our Photogallery </h1>
          <h3>-Pratham Sahu</h3>
          <AlbumMaker/>
        </div>

      </header>
    </div>
  );
}

export default App;
