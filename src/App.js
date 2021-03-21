import './App.css';
import { Link, Route } from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage'

function App() {
  return (
    <div className="App">
      App Component
      <br/>
      <Link to="movies">Movies</Link> {/* This link works as same as <a href="">... from HTML */}
      <Route path="./movies" component={MoviesPage}></Route>
    </div>
  );
}

export default App;
