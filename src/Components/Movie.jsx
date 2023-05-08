import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../index.css";

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
      <div className="container">
        <div className="row my-2">
          <div className="card h-100">
            <div className="card-title d-sm-none d-md-block">
              <img
                src={movie.Poster}
                className="img-fluid card-img-top poster d-xs-none d-sm-block"
                alt="x"
              />
            </div>
            <div className="card-body">
              <h5>
                {movie.Title.length > 20
                  ? movie.Title.substring(0, 20) + "..."
                  : movie.Title}
              </h5>
              <p>{movie.Type === "movie" ? "Movie" : "TV"}</p>
              <p className="card-text">{movie.Year}</p>
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

      {movieDetails && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}    
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
