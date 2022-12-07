import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";

function AllMovies() {
  const { movie } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  // const [searchMovie, setSearchMovie] = useState(movie);

  // function onSearch() {
  //   fetchMovies(searchMovie);
  // }

  async function fetchMovies(movieTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=fe87177d&s=${movieTitle || movie}`
    );
    setMovies(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
    <Search fetchMovies={fetchMovies} movie={movie}/>
      {loading ? (
        new Array(10).fill(0).map((_, index) => (
          <div className="movie" key={index}>
            <div className="movie-card">
              <div className="movie-card__container">
                <div className="movie__img--skeleton"></div>
                <div className="movie__title">
                  <div className="movie__title--skeleton"></div>
                </div>
                <div className="movie__year">
                  <div className="movie__year--skeleton"></div>
                </div>
                <div className="movie__year">
                  <div className="imdb--skeleton"></div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container">
          <div className="row">
            <div className="movie-list">
              {movies
                .filter((elem) => elem)
                .slice(0, 6)
                .map((movie) => (
                  <div className="movie" key={movie.imdbID}>
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
      )}
    </>
  );
}

export default AllMovies;