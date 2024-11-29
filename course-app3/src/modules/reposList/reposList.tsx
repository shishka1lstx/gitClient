import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchRepos from '../../entities/repos';
import RepoCard from '../../components/repoCard';
import Loader from '../../components/Loader';
import './reposList.css';

export type ReposListProps = { 
};

const ReposList: React.FC<ReposListProps> = () => {
    const [repos, setRepos] = useState<any[]>([]);
    const loc = useLocation();
    const [error, setError] = useState(false);
    const [[avatar, url], setAvatar] = useState<string[]>([]);

    useEffect(() => {
            const username = loc.pathname.slice(1 );
            fetchRepos(username).then( ([repos, avatar, url]) => {
                setRepos(repos);
                setAvatar([avatar, url]);
                setError(false);
            }).catch(() => setError(true)); 
        }, [loc.pathname]);

   

    return(
        <React.Fragment>
            <div className="reposList">
                { (error == true)? (<span>404</span>): 
                    ( repos.length > 0 )  ?
                        ( repos.map( (repo) => ( <RepoCard avatar_url={url} owner_url={avatar} key={repo.id} name={repo.name} html_url={repo.html_url} owner={repo.owner.login}></RepoCard>)) ):
                        (<Loader/>) 
                }
            
            </div>
        </React.Fragment>
    )
}

export default ReposList;