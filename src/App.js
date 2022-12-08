import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import AllMovies from './pages/AllMovies';
import { useParams } from "react-router-dom";
import Footer from './components/Footer';


function App(props) {

  return (
    <Router>
    <div className="App">  
    <Nav />
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/movie' exact element={<AllMovies/>}></Route>
      <Route path='/movie/:id' element={<MovieInfo />}></Route>
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
