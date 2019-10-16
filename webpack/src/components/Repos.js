import React,{PropTypes} from 'react'

const Repos = ({title, repos}) => (
    <div className='repos flex'>
        <h2>{title}:</h2>
        <ul>
            {repos.map((repo)=>(
                <li key={repo.id}><a href={repo.html_url} target='blank_'> {repo.name} </a></li>
            ))}
            </ul>
    </div>

)
Repos.defaultProps ={
    title: 'Repositório'
}
Repos.propTypes = {
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}
export default Repos;