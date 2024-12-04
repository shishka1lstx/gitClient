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
    // const [langs, setLangs] = useState({});
    const [error, setError] = useState(false);
    const typeFilterContext = useSearchTypeContext();



        useEffect(() => {
            const fetchData = async () => {
                const username = loc.pathname.slice(1);
                try {

                    const repos = await fetchRepos(username, typeFilterContext.type);
                    setRepos(repos);
                    setError(false);
                   
                } catch (error) {

                    setError(true);

                }
            };
        
            fetchData();
        }, [loc.pathname, typeFilterContext.type]);

    return(
        <React.Fragment>
            <div className="reposList">
                { 
                (error == true)? (<span>404</span>): 
                    ( repos.length > 0 )  ?
                        ( repos.map( (repo) => ( 
                        <RepoCard  
                            link_to_own_page={`${loc.pathname}/${repo.name}`}
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