import React from 'react';


const SearchBar =(props)=> {
    return (
        <input placeholder='type to search ...'  className='form-control' 
        value={props.value}
        onChange={(event)=> props.setSearchMovie(event.target.value)}
        />
    )
}


export default SearchBar