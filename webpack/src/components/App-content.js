'use strict'

import React,{PropTypes} from 'react'
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos'

const AppContent = ({ userinfo, repos,  starred, isFetching, handleSeach, getRepos, getStarred}) =>(
    <div className='container'>
                <Search isDisabled={isFetching} handleSeach={handleSeach}/>
                {isFetching && <div>Carregando...</div>}
                {!!userinfo && <UserInfo userinfo={userinfo}/>}
                {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}
                
                {!!repos.length && 
                    <Repos title="Repositórios"
                            repos={repos}/>
                }
                {!!starred.length && 
                <Repos title="Favoritos"
                repos={starred}/>}
            </div>
)
export default AppContent;

AppContent.propTypes = {
    userinfo: PropTypes.object, 
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    getRepos: PropTypes.func
}