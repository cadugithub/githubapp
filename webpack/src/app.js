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
    handleSeach(e){
            const value = e.target.value;
            const keyCode = e.which || e.keyCode
            const ENTER = 13

            if(keyCode === ENTER){
                ajax().get(`https://api.github.com/users/${value}`).then(
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
                            
                        })
                        
                    })
            }
         
    }
    getRepos(type){
        return (e)=>{
            ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`).then(
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