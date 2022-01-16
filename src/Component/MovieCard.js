import React from 'react'


const MovieCard =(props) => {
    return (
        <div>
            {props.movies.map((movie, index) =>
            <div className='col'>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                
            </div>)}
            
        </div>
    )
}

export default MovieCard
