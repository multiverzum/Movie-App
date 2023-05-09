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
          <div className="card shadow-sm my-2 bg-transparent">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225px" src={movie.Poster}/>

            <div className="card-body bg-transparent">
              <p className="card-text text-white">{movie.Title.length > 20
                  ? movie.Title.substring(0, 20) + "..."
                  : movie.Title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">{movie.Type === "movie" ? "Movie" : "TV"}</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleShowModal}>Show More</button>
                </div>
                <small className="text-muted text-white">{movie.Year}</small>
              </div>
            </div>
          </div>

      {movieDetails && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{movieDetails.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-between">
              <img
                src={movieDetails.Poster}
                alt={movieDetails.Title}
                className="mr-4 modal-pic"
              />
              <div className="mx-5 h-100">
                <p className=" border-bottom border-bottom-md-primary">
                  Year: {movieDetails.Year}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Rated: {movieDetails.Rated}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Released: {movieDetails.Released}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Runtime: {movieDetails.Runtime}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Genre: {movieDetails.Genre}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Director: {movieDetails.Director}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Writer: {movieDetails.Writer}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Actors: {movieDetails.Actors}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Plot: {movieDetails.Plot}
                </p>
                <p className=" border-bottom border-bottom-md-primary">
                  Rating: {movieDetails.imdbRating}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Movie;
