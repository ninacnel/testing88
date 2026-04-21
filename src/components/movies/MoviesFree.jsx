import React from 'react'
import MovieItem from '../movieItem/MovieItem'

const MoviesFree = ({ title, movies }) => {

  return (
    // JSX
    <div>
        <h1>{title}</h1>
        <div className='movies-wrapper'>
        {movies
        .filter((movie) => movie.isFree)
        .map((movie) =>(
            <MovieItem
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            isFree={movie.isFree}
            />
        ))}
        </div>
    </div>
  )
}

export default MoviesFree;