import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Movie from './Components/Movie';
import SimilarMovies from './Components/SimilarMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getMovieData = async (searchInput) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&s=${searchInput}`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search.slice(0, 1));
    }
  };

  const getSimilarMovieData = async (movie) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&s=${movie.Title}`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setSimilarMovies(responseJSON.Search.slice(0, 4));
    }
  };

  const getMovieDetails = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&i=${id}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };
  
  useEffect(() => {
    getMovieData(searchInput);
  }, [searchInput]);

  useEffect(() => {
    if (movies.length > 0) {
      getSimilarMovieData(movies[0]);
    }
  }, [movies]);

  return (
    <>
      <MyNavbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="container d-flex flex-wrap">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-3">
            <Movie movie={movie} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
          </div>
        ))}
      </div>
      {similarMovies.length > 0 && (
        <SimilarMovies movies={similarMovies} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
      )}
    </>
  );
}

export default App;
