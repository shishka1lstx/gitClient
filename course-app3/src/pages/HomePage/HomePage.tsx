import ReposList from "../../modules/reposList"
import { useLocation } from "react-router-dom"
import React, { createContext, useContext, useEffect, useState } from "react"
import Text from "../../components/text"
import SearchModule from "../../modules/searchModule"

export type homePageProps = {
    
}

interface filter {
    type: string,
    setType: (value: string) => void
}

const searchTypeContext = createContext<filter>({
    type: 'all',
    setType: () => {}
})

const Provider = searchTypeContext.Provider;

export const useSearchTypeContext = () => useContext(searchTypeContext);

const HomePage: React.FC<homePageProps> = ({}) =>{

    const [username, setUsername] = useState('');
    const [type, setType] = useState('all')
    let location = useLocation().pathname;
    
    useEffect( () => {
        setUsername(location.slice(1));
    }, [location])
   
    return(
        <React.Fragment>
            <Provider value={{type, setType}}>
                <Text view="title" >{`List of organization repositories`}</Text>
                <SearchModule/>
                {
                (username && <Text view="p-20" >{`${username}'s repositories:`}</Text>)
                }
                <ReposList/>
            </Provider>
        </React.Fragment>
            
    )
}

export default HomePage