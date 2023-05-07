import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Movie from './Components/Movie';
import SimilarMovies from './Components/SimilarMovies';
import './index.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showText, setShowText] = useState(true); 

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
      setSimilarMovies(responseJSON.Search.slice(1,9));
    }
  };

  const getMovieDetails = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&i=${id}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };

  useEffect(() => {
    if (searchInput !== '') {
      setShowText(false);
      getMovieData(searchInput);
    }else{
      setMovies([]);
    }
  }, [searchInput]);

  useEffect(() => {
    if (movies.length > 0) {
      getSimilarMovieData(movies[0]);
    }
  }, [movies]);

  return (
    <>
      <MyNavbar searchInput={searchInput} setSearchInput={setSearchInput} getMovieData={getMovieData} />
      {showText && (
        <div className="container my-5 text-light fs-5 fw-bold">
          <p className="text-center">Welcome to Silver Screenings, the place where you can discover and explore the world of movies. From classic Hollywood films to modern indie hits, our carefully curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back, and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!</p>
          <div className="d-flex justify-content-between mt-5 md-col-4">
          <button className='btn btn-dark border border-light rounded-pill'>Find us on TikTok</button>
          <button className='btn btn-dark border border-light rounded-pill'>Find us on Instagram</button>
          <button className='btn btn-dark border border-light rounded-pill'>Find us on Twitter</button>
          </div>
        </div>
      )}
      <div className="container d-flex flex-wrap">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-4 container">
            <Movie movie={movie} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
          </div>
        ))}
      </div>
      <div className="container">

      {similarMovies.length > 0 && (
        <SimilarMovies movies={similarMovies} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
        )}
        </div>
    </>
  );
}

export default App;
