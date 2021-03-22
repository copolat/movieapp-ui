import React from 'react'
import PropTypes from 'prop-types'

function MovieList({movies}) {
  const movieList = <div> Movies List here...</div>
  const emptyMessage = <div> There is no any movie yet...</div>
  console.log(movies)
  return (
    <div>
      Movie List
      {movies.length === 0 ? emptyMessage : movieList}
    </div>
  )
}

MovieList.propTypes = {movies: PropTypes.object.isRequired

}

export default MovieList

