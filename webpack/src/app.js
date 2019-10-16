'use strict'

import React,{ Component } from 'react'
import AppContent from './components/App-content'
import ajax from '@fdaciuk/ajax'
class App extends Component
{
    
    constructor()
    {
        super()
        this.state = {
            userinfo:null,
            repos: [],
            starred: []
        }
    }
    getGitHubApiUrl(username, type){
        const internalUser = username ? `/${username}`: '';
        const internalType = type ? `/${type}`: '';
        return `https://api.github.com/users${internalUser}${internalType}`
    }
    handleSeach(e){
            const value = e.target.value;
            const keyCode = e.which || e.keyCode
            const ENTER = 13
            const target = e.target
            if(keyCode === ENTER){
                e.target.disabled = true;
                ajax().get(this.getGitHubApiUrl(value)).then(
                    
                    (result)=>{
                        this.setState(
                            {
                                userinfo: {
                                    username: result.name,
                                    login:result.login,
                                    photo: result.avatar_url,
                                    repos: result.public_repos,
                                    followers: result.followers,
                                    following: result.following
                            },
                            repos:[],
                            starred:[]
                            
                        })
                        
                    })
                    .always(()=>{
                        target.disabled = false;
                    })
            }
         
    }
    getRepos(type){
        return (e)=>{
            const username = this.state.userinfo.login
            ajax().get(this.getGitHubApiUrl(username,type)).then(
                    (result)=>{
                        this.setState({
                            [type]: result.map((repo)=>({
                                    name: repo.name,
                                    html_url: repo.html_url
                            }))
                        })
                    })
        }
       
    }
    render()
    {
        return <AppContent
                userinfo = {this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                handleSeach={(e)=>this.handleSeach(e)}
                getRepos={this.getRepos('repos')}
                getStarred={this.getRepos('starred')}
                />
    }
}
export default App