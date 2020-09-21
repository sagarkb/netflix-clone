import React, { useEffect, useState } from 'react';

import request from './request';
import axios from './axios';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1))
        ]
      );
      return response;
    }
    fetchMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__content'>
        <h1 className='banner__title'>
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  );
};

export default Banner;
