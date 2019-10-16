import React,{ PropTypes } from 'react'

const UserInfo= ({userinfo})=>(
    <div className='user-info'>
            <img src={userinfo.photo}/>
            
            <h1>
                <a href={`https://github.com/${userinfo.login}`} target='blank_'>{userinfo.username}</a>
            </h1>

            <ul className='repos-info'>
                <li>Repositórios: {userinfo.repos}</li>
                <li>Seguidores: {userinfo.followers}</li>
                <li>Seguindo: {userinfo.following}</li>
            </ul>
            
        </div>
)
export default UserInfo;
UserInfo.propTypes={
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired, 
        followers: PropTypes.number.isRequired, 
        following: PropTypes.number.isRequired
    })
}