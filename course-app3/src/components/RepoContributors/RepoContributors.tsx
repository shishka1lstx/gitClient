import './RepoContributors.scss'


export type RepoContributorsProps = {
    persons: Array<{[key:string]: string}>
}
const RepoContributors: React.FC<RepoContributorsProps> = ({persons}) => {

   
    return(
        <div className="contributors">
            <a href=''>Contributors<span>{persons.length}</span></a>
            <div className="contributors__list">
                {persons.slice(0, 5).map( (person) =>{
                    
                    
                    return(
                        <a href={person.html_url}> <div  className="contributors__list-item">
                            <img className='contributors__list-item__avatar' src={person.avatar_url}/>
                            <p>{person.login}</p>
                        </div></a>
                        )
                })}
            </div>
        </div>
    )
}
export default RepoContributors