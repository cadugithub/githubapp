'use strict'

import React,{PropTypes} from 'react'


const Search = ({ handleSeach }) =>(
        <div className='search'>
            <input type='search' 
            placeholder='Digite o nome do usuário no github'
            onKeyUp={handleSeach}/>
        </div>
)
export default Search;
Search.propTypes = {
    handleSeach: PropTypes.func.isRequired,
}