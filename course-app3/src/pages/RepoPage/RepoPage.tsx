import { useEffect, useState } from "react";
import { marked } from "marked";
import  {getRepoContributors, getRepoData, getRepoLangs, getRepoReadme } from "../../entities/repoData";
import { useLocation } from "react-router-dom";
import LanguagesSection from "../../components/LanguagesSection";
import Statistics from "../../components/Statistics";
import React from "react";
import RepoTopic from "../../components/RepoTopic";
import './RepoPage.scss'
import RepoContributors from "../../components/RepoContributors";

export type RepoPageProps = {
  
}


const RepoPage: React.FC<RepoPageProps> = () => { 
    const loc = useLocation();
    const [readmeContent, setReadmeContent] = useState('');
    const owner = loc.pathname.split('/')[1];
    const repoName = loc.pathname.split('/')[2];
    const [stats, setStats] = useState({
        forks: 0,
        stars:0,
        watchers: 0,
        languages: {},
        topics: [],
        contributors: []
    });

    
    useEffect( () => {
        
        const fetchDataForRepo = async() => {
            const currentRepoData = await getRepoData(owner, repoName);
            const currentRepoLangs = await getRepoLangs(currentRepoData.languages_url);
            const currentrepoContributors = await getRepoContributors(currentRepoData.contributors_url);
            const content = await getRepoReadme(owner, repoName);

            setReadmeContent(content);
            setStats(
                {
                    forks: currentRepoData.forks_count,
                    stars: currentRepoData.stargazers_count,
                    watchers: currentRepoData.watchers_count,
                    languages: currentRepoLangs,
                    topics: currentRepoData.topics,
                    contributors: currentrepoContributors 
                }
            )
        }
       fetchDataForRepo();
    }, [loc.pathname])
    
    return(
        <div className="repoPage">
            <div className="repoPage__wrapper">
                <div className="links">
                    <a className='link_to_back' href={`/${owner}`}>
                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1201 22.56L2.42678 13.8667C1.40012 12.84 1.40012 11.16 2.42678 10.1333L11.1201 1.44" stroke="#1F883D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>

                    <h1>{repoName}</h1>
                </div>

                <a className="original_repo-link" href={`https://github.com/${owner}/${repoName}`}>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.86174 10.4025C8.95983 10.4025 8.04857 10.0452 7.35996 9.34073C7.06914 9.05293 7.06914 8.57671 7.35996 8.28906C7.64123 8.00126 8.09691 8.00126 8.38772 8.28906C8.79509 8.70591 9.3186 8.91412 9.86161 8.91412C10.3951 8.91412 10.9186 8.70577 11.3355 8.28906L13.9343 5.62978C14.3417 5.20317 14.5452 4.66734 14.5452 4.12159C14.5452 3.56594 14.3415 3.03012 13.9343 2.6134C13.5269 2.19655 12.9938 1.98834 12.4604 1.98834C11.927 1.98834 11.3938 2.19669 10.9865 2.6134L9.68708 3.94309C9.39625 4.2309 8.94043 4.2309 8.65932 3.94309C8.3685 3.6455 8.3685 3.17907 8.65932 2.89142L9.95877 1.56173C10.6473 0.847303 11.5588 0.5 12.4606 0.5C13.3622 0.5 14.2737 0.847303 14.9623 1.56173C15.6508 2.26623 15.9999 3.18903 15.9999 4.12172C15.9999 5.04462 15.6508 5.97708 14.9623 6.68171L12.3635 9.3406C11.6749 10.0452 10.7634 10.4025 9.86174 10.4025Z" fill="black"/>
                        <path d="M8.63995 5.65926C8.92121 5.94707 8.92121 6.42328 8.63995 6.71093C8.35868 7.00853 7.8933 7.00853 7.61219 6.71093C7.20482 6.29409 6.67164 6.08587 6.1383 6.08587C5.60486 6.08587 5.07165 6.29423 4.6644 6.71093L2.06559 9.37022C1.65823 9.79683 1.45475 10.3327 1.45475 10.8784C1.45475 11.4341 1.65836 11.9699 2.06559 12.3866C2.47296 12.8034 2.99648 13.0117 3.53949 13.0117C4.07292 13.0117 4.59644 12.8033 5.01338 12.3866L6.31283 11.0569C6.5941 10.7691 7.04978 10.7691 7.34059 11.0569C7.62185 11.3545 7.62185 11.8209 7.34059 12.1086L6.04114 13.4383C5.35266 14.1527 4.44114 14.5 3.53936 14.5C2.62788 14.5 1.72619 14.1527 1.03758 13.4383C0.349105 12.7338 0 11.811 0 10.8783C0 9.95538 0.339405 9.02291 1.03758 8.31828L3.63639 5.65926C4.32487 4.95476 5.23639 4.59753 6.13817 4.59753C7.03986 4.59741 7.9516 4.95463 8.63995 5.65926Z" fill="black"/>
                    </svg>
                    {repoName}
                </a>

                <div className="topics__wrapper">
                    { stats.topics.map( (topic) =>{
                        return (<RepoTopic topic={topic}/>)
                    })}
                </div>
                <Statistics forks={stats.forks} watchers={stats.watchers} stars={stats.stars}/>
                
                <div className="repoPage__langAndContr">
                    <RepoContributors persons={stats.contributors}/>
                    <LanguagesSection langsFromApi={stats.languages}/> 
                </div>
                
                <div className="readMe"  dangerouslySetInnerHTML={{ __html: marked(readmeContent) }}></div>


            

            </div>
        </div>
    )
}

export default RepoPage;