import React from 'react';

const Details = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      bello
      <h2>{movie?.original_name || movie?.title || movie?.name}</h2>
    </div>
  );
};

export default Details;
