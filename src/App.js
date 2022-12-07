import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import AllMovies from './pages/AllMovies';
import Search from './pages/Search';

function App() {
  return (
    <Router>
    <div className="App">  
    <Nav />
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/:search' exact element={<AllMovies />} />
      {/* <Route path='/movies/:id' element={<MovieInfo />}></Route> */}
    </Routes>
    </div>
    </Router>
  );
}

export default App;
