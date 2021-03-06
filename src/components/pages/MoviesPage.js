// rcredux create class component snippet 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from '../MovieList';

export class MoviesPage extends Component {

  static propTypes = {movies:PropTypes.object.isRequired} // This line indicates that the props would come will be required. 

  render() {
    console.log(this.props) // Test props
    return (
      <div>
        <h1>MOVIES COMPONENT</h1>
        <MovieList movies={this.props.movies}/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({ movies: state.moviesReducer})
const mapStateToProps = ({movieReducer}) => ({movies: movieReducer}) // This code line pulls all props froms state and it works as same as line 15.


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
