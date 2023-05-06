import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Movie({ movie, getMovieDetails }) {
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const handleShowModal = async () => {
    const details = await getMovieDetails(movie.imdbID);
    setMovieDetails(details);
    setShowModal(true);
  };

  return (
    <>
      <div className="card shadow-sm mb-5">
        <img
          src={movie.Poster}
          className="py-2 img-fluid"
          style={{ width: '250px', height: '250px' }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <Button variant="primary" onClick={handleShowModal}>
            Show More
          </Button>
        </div>
      </div>
      {movieDetails && (
        <Modal show={showModal} onHide={() => setShowModal(false)} className='w-100'>
          <Modal.Header closeButton>
            <Modal.Title>{movieDetails.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <p>Year: {movieDetails.Year}</p>
            <p>Rated: {movieDetails.Rated}</p>
            <p>Released: {movieDetails.Released}</p>
            <p>Runtime: {movieDetails.Runtime}</p>
            <p>Genre: {movieDetails.Genre}</p>
            <p>Director: {movieDetails.Director}</p>
            <p>Writer: {movieDetails.Writer}</p>
            <p>Actors: {movieDetails.Actors}</p>
            <p>Plot: {movieDetails.Plot}</p>
            <p>Rating: {movieDetails.imdbRating}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
         

          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Movie;
