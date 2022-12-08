import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/ui/Movie";
import Search from "./Search";

function AllMovies() {
  const { movie } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [text, setText] = useState("");

  function filterMovies(filter) {
    if (filter === "NEW_TO_OLD") {
      setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
    }
    if (filter === "OLD_TO_NEW") {
      setMovies(movies.slice().sort((a, b) => a.Year - b.Year));
    }
    if (filter === "A_Z") {
      setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
    }
  }

  async function fetchMovies(movieTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=fe87177d&s=${movieTitle || movie}`
    );
    setText(movieTitle || movie);
    setMovies(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies__container">
    <Search movies={movies} fetchMovies={fetchMovies}/>
      <div className="movies__header">
        {
          text? (
            <h2 className="section__title">Search results for: <span className="blue">{text}</span></h2>
          ) : (
            <h2 className="section__title">All Movies</h2>
          )
        } 
        <select
          id="filter"
          defaultValue="DEFAULT"
          onChange={(event) => filterMovies(event.target.value)} 
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="NEW_TO_OLD">Newest to Oldest</option>
          <option value="OLD_TO_NEW">Oldesr to Newest</option>
          <option value="A_Z">A to Z</option>
        </select>
      </div>
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
        <Movie movies={movies}/>
      )}
    </div>
  );
}

export default AllMovies;
