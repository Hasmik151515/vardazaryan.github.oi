import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import ImageSlider from './components/ImageSlider';
import KapBlocks from './components/KapBlocks';
import Newsfeed from './components/Newsfeed';
import Footer from './components/Footer';
import InfoColumns from './components/InfoColumns';

import haso from './assets/haso.png';
// ... մյուս նկարները

function App() {
  const images = [haso, nkar, nkarr, nkarrr, nk, nka];

  return (
    <div className="App">
      <Navbar />
      <SecondaryNavbar />
      <ImageSlider images={images} />
      <KapBlocks />
      <Newsfeed />
      <InfoColumns />
      <Footer />
    </div>
  );
}

export default App;
