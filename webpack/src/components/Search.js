'use strict'

import React, { PropTypes } from 'react'


const Search = ({ isDisabled, handleSeach }) =>(
        <div className='search'>
            <input type='search' 
            placeholder='Digite o nome do usuário no github'
            onKeyUp={handleSeach}
            disabled={isDisabled}/>
        </div>
)
Search.propTypes = {
    handleSeach: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}
export default Search;
