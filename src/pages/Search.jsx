import React, { useEffect, useState } from 'react';

function Search({ fetchMovies, movie}) {
  const [searchMovie, setSearchMovie] = useState(movie);

  function onSearch() {
    fetchMovies(searchMovie);
  }
 
  return (
    <div className="header__content">
    <input
    className='search__input'
    placeholder="Search by movie name"
    type="text"
    value={searchMovie || ''}
    onChange={(event) => setSearchMovie(event.target.value)}
    onKeyPress={(event) => event.key === "Enter" && onSearch()}
  />
  <button className="btn" onClick={() => onSearch()}>
  </button>
</div>
  )
}

export default Search;