'use strict'

import React, { Component } from 'react'

const App = () => 
(

    <div className='app'>
        <div className='search'>
            <input type='search' placeholder='digite o nome do usuário no github'/>
        </div>
        <div className='user-info'>
            <img src='https://avatars2.githubusercontent.com/u/37313040?v=4'/>
            <h1><a href='https://github.com/cadugithub' target='blank_'>Carlos Eduardo</a></h1>
        
            <ul className='repos-info'>
                <li>Repositórios: 7</li>
                <li>Seguidores: 5</li>
                <li>Seguindo: 5</li>
            </ul>

            <div className='actions'>
                <button>ver repositórios</button>
                <button>Ver favoritos</button>
            </div>

            <div className='repos'>
                <h2>Repositórios:</h2>
                <ul>
                    <li><a href='#'>Nome do repositório</a></li>
                </ul>
            </div>

            <div className='starred'>
                <h2>Favoritos:</h2>
                <ul>
                    <li><a href='#'>Nome do repositório</a></li>
                </ul>
            </div>
        </div>
    </div>
)
export default App