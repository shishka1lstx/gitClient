import ReposList from "../../modules/reposList"
import SearchInput from "../../components/searchInput"
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Text from "../../components/text"



export type homePageProps = {
    
}


const HomePage: React.FC<homePageProps> = ({}) =>{

    const [username, setUsername] = useState('');
    let location = useLocation().pathname;
    
    useEffect( () => {
        setUsername(location.slice(1));
    }, [location])
   


    return(
        <React.Fragment>
            <SearchInput/>
            {
             (username && <Text view="title" >{`${username}'s repositories:`}</Text>)
            }

            <ReposList/>
        </React.Fragment>
    )
}

export default HomePage