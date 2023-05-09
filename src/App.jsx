import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Movie from './Components/Movie';
import SimilarMovies from './Components/SimilarMovies';
import './index.css';
import Footer from './Components/Footer';
import heroIlustration from './Images/hero-section-ilustration.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showText, setShowText] = useState(true);

  const subtitle = {
    maxWidth: 450,
    marginTop: 10,
  };
  const getMovieData = async (searchInput) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&s=${searchInput}`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search.slice(0, 1));
    }
  };

  const getSimilarMovieData = async (movie) => {
    const url = ` http://www.omdbapi.com/?apikey=7e698aea&s=${movie.Title}`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setSimilarMovies(responseJSON.Search.slice(1, 9));
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
    } else {
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
          <div className="row">

            <div className="col-md-6 align-items-center">
              <div className='d-flex flex-column justify-content-center h-100'>
                <span className='h1'>
                  Explore the Cinematic Universe
                </span>
                <p style={subtitle}>
                  Search, rate, and discover movies from every genre and era.
                  Get access to in-depth information and ratings,
                  and find your next movie obsession.
                </p>
                <div className='d-flex'>
                  <div className='p-2'>
                    <button className='btn btn-primary'>Create a FREE Profile</button>

                  </div>
                  <div className='p-2'>
                    <button className='btn btn-light'>Explore the platform</button>

                  </div>
                </div>
              </div>


            </div>

            <div className="col-md-6">
              <img src={heroIlustration} className='w-100' />

            </div>

          </div>


          <div className='container'>
            <h2>About</h2>
            <p>
              Welcome to Silver Screenings,
              the place where you can discover and explore the world of movies.
              From classic Hollywood films to modern indie hits, our carefully
              curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back,
              and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!

            </p>

            <h2>About</h2>
            <p>
              Welcome to Silver Screenings,
              the place where you can discover and explore the world of movies.
              From classic Hollywood films to modern indie hits, our carefully
              curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back,
              and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!

            </p>


            <h2>About</h2>
            <p>
              Welcome to Silver Screenings,
              the place where you can discover and explore the world of movies.
              From classic Hollywood films to modern indie hits, our carefully
              curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back,
              and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!

            </p>

          </div>

        </div>
      )}

      {movies.map((movie) => (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div key={movie.imdbID}>
                <Movie movie={movie} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {similarMovies.length > 0 && (
        <SimilarMovies movies={similarMovies} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
      )}
      <Footer />
    </>
  );
}

export default App;
