import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchRepos from '../../entities/repos';
import RepoCard from '../../components/repoCard';
import Loader from '../../components/Loader';
import './reposList.css';
import { useSearchTypeContext } from '../../pages/HomePage/HomePage';

export type ReposListProps = { 
};

const ReposList: React.FC<ReposListProps> = () => {
    const [repos, setRepos] = useState<any[]>([]);
    const loc = useLocation();
    const [error, setError] = useState(false);
    const typeContext = useSearchTypeContext();

    useEffect(() => {
            const username = loc.pathname.slice(1 );
            fetchRepos(username,typeContext.type ).then( (repos) => {
                setRepos(repos);
                setError(false);
            }).catch(() => setError(true)); 
            console.log(typeContext.type);
        }, [loc.pathname, typeContext.type ]);

   

    return(
        <React.Fragment>
            <div className="reposList">
                { (error == true)? (<span>404</span>): 
                    ( repos.length > 0 )  ?
                        ( repos.map( (repo) => ( 
                        <RepoCard  
                            key={repo.id} 
                            stars={repo.stargazers_count}
                            update_date={repo.updated_at} 
                            description={repo.description} 
                            name={repo.name}/>
                        )) ):
                        (<Loader/>) 
                }
            
            </div>
        </React.Fragment>
    )
}

export default ReposList;