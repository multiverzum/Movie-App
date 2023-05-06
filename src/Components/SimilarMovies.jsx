import React from 'react';
import Movie from './Movie';

function SimilarMovies({ movies, getMovieDetails}) {
  if (!movies.length) {
    return null;
  }

  return (
    <div className='container-fluid'>
      <h2 className='text-center'>Similar movies</h2>
      <div className='row'>
        {movies.map((movie) => (
          <div key={movie.imdbID} className='col-3'>
            <Movie movie={movie} getMovieDetails={getMovieDetails}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarMovies;
