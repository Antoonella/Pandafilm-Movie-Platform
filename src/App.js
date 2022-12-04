import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
    <div className="App">  
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path=':movie' element={<Movies />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
