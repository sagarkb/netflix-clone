import React from 'react';

import Row from './Row';
import Banner from './Banner';
import requests from './request';
import Navbar from './NavBar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
      <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
      <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
      <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
      <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// FIXME:
// 7b01c2093a56475e68d257a02867e004
