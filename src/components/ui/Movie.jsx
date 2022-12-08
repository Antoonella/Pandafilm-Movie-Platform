import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Movie({ movies }) {
  let navigate = useNavigate();
  return (
    <>
    <div className="container">
          <div className="row">
            <div className="movie-list">
              {movies
                .filter((elem) => elem)
                .slice(0, 6)
                .map((movie) => ( 
                  <div className="movie" key={movie.imdbID} onClick={() => navigate(`/movie/${movie.imdbID}`)}>
                    <div className="movie-card">
                      <div className="movie-card__container">
                        <figure className="movie__img--wrapper">
                          <img
                            className="movie__img"
                            src={movie.Poster}
                            alt=""
                          />
                        </figure>
                        <h2 className="movie__title">{movie.Title}</h2>
                        <h3 className="movie__year">{movie.Year}</h3>
                        <a
                          href={`https://imdb.com/title/${movie.imdbID}`}
                          className="imdb"
                          target="_blank"
                        >
                          Imdb
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Movie;