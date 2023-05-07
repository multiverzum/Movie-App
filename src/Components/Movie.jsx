import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import '../index.css';

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
      <div className="card mb-5 mt-3 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className=" card-title">
            <img
              src={movie.Poster}
              className="py-2 img-fluid card-img-top h-80 w-100"
              alt='x'
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-text">
                {movie.Title.length > 20
                  ? movie.Title.substring(0, 20) + "..."
                  : movie.Title}
              </h5>

             <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-subtitle">
                  <p>{movie.Type === "movie" ? "Movie" : "TV show"}</p>
                </div>
                <div className="col-4 mx-5">
                  <p className="card-text">{movie.Year}</p>
                  </div>
              </div>
              <Button
                variant="dark"
                className="form-control"
                onClick={handleShowModal}
                >
                Show More
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {movieDetails && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          className="w-100"
        >
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
