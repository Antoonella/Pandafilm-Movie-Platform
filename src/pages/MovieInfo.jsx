import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Logoo from "../assets/logo.png";

function MovieInfo() {
  const { id } = useParams();
  const [movies, setMovieInfo] = useState(null);
  let content = null;
  let navigate = useNavigate();

  async function fetchMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=fe87177d&i=${id}`
    );
    setMovieInfo(data);
    console.log(data);
  }

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <div>
      {movies ? (
        (content = (
          <div className="movieInfo__container">
            <div className="movieInfo">
              <button className="back__btn" onClick={() => navigate("/movie")}>
                ← Back
              </button>
              <h1 className="movieInfo__title">{movies.Title}</h1>
              <div className="movieDetails">
                <div className="first__container">
                  <div>
                    <span className="movie__rating">{movies.Rated}</span>
                    <span className="movie__type">{movies.Type}</span>
                    <span className="movieInfo__year">
                      {movies.Year} • {movies.Runtime}
                    </span>
                  </div>
                  <div className="movie__genre--container">
                    <span className="movie__genre">{movies.Genre}</span>
                  </div>
                </div>
                <div className="second__container">
                  <button className="play__btn">
                    <p className="play__btn--para">PLAY</p>
                  </button>
                  <button className="btn__tralier">TRAILER</button>
                </div>
                <p className="movie__description">{movies.Plot}</p>
              </div>
            </div>
            <div className="img__poster">
              <figure className="movieInfo__img--container">
                {movies.Poster === "N/A" ? (
                  <img className="movieInfo__img" src={Logoo} alt="" />
                ) : (
                  <img className="movieInfo__img" src={movies.Poster} alt="" />
                )}
              </figure>
            </div>
          </div>
        ))
      ) : (
        <div className="movieInfo__skeleton--container">
          <div className="moveInfo__skeleton">
            <h1 className="movieInfo__skeleton--title"></h1>
            <div className="movieInfo__skeleton--btns">
              <div className="movieInfo__skeleton--btnOne"></div>
              <div className="movieInfo__skeleton--btnTwo"></div>
            </div>
            <div className="movieInfo__skeleton--descriptionOne"></div>
            <div className="movieInfo__skeleton--descriptionTwo"></div>
            <div className="movieInfo__skeleton--descriptionThree"></div>
          </div>
          <div className="movieInfo__skeleton--img"></div>
        </div>
      )}
    </div>
  );
}

export default MovieInfo;
