import React from 'react';
import Movie from './Movie';

function SimilarMovies({ movies, getMovieDetails}) {
  if (!movies.length) {
    return null;
  }

  return (
    <div className='container-fluid'>
      <div className="">
      <h2 className='text-center title text-white fs-1 py-2 border border-bottom'>Similar movies</h2>
      </div>
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
