import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Searchbar from './Searchbar';


function Home() {
  const { movies } = useParams();
  const [movieCard, setmovieCard] = useState([]); 
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchMovies() {
    setLoading(true);
    const { data }= await axios.get("https://www.omdbapi.com/?apikey=fe87177d&s=movies");
    setmovieCard(data.Search);
    setLoading(false);
    }
    fetchMovies();
  }, [])

  return (
    <>
    <Searchbar />
    <h1 className="title">Browse our movies</h1>
    {loading? (
      new Array(10).fill(0).map((elemnt, index) => (
        <div className="movie" key={index}>
        <div className="movie-card">
          <div className="movie-card__container">
           <div className='movie__img--skeleton'></div>
           <div className='movie__title'>
             <div className='movie__title--skeleton'></div>
           </div>
           <div className='movie__year'>
              <div className='movie__year--skeleton'></div>
           </div>
           <div className='movie__year'>
              <div className='imdb--skeleton'></div>
           </div>
          </div>
        </div>
        </div>
      ))
    ): (
      <div className="container">
      <div className="row">
        <div className="movie-list">
          {movieCard.map((movie) => (
              <div className="movie" key={movie.imdbID} >
              <div className="movie-card">
                <div className="movie-card__container">
                  <figure className='movie__img--wrapper'>
                    <img className='movie__img' src={movie.Poster} alt="" />
                  </figure>
                  <h2 className='movie__title'>{movie.Title}</h2>
                  <h3 className='movie__year'>{movie.Year}</h3>
                  <a href={`https://imdb.com/title/${movie.imdbID}`} className="imdb" target="_blank">Imdb</a>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
     </div>
    )}
   </>
  )
}

export default Home;