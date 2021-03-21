import './App.css';
import { Link, Route } from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage'

function App() {
  return (
    <div className="App">
      App Component
      <br/>
      <Link to="movies">Movies</Link> {/* This link works adds a text at the end of URL. In this case our local host URL is "localhost:3000" and this link will add movies at the end of URL "localhost:3000/movies" */}
      <Route path="/movies" component={MoviesPage}></Route> {/* This ROUTE checks the URL if it has a change -according to path- then it will render the indicated component */}
    </div>
  );
}

export default App;
