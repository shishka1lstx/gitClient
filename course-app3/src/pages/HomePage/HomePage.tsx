import ReposList from "../../modules/reposList"
import React, { createContext, useContext,  useState } from "react"
import Text from "../../components/text"
import SearchModule from "../../modules/searchModule"
import './HomePage.scss'


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

    const [type, setType] = useState('all')
    
   
    return(
        <React.Fragment>
            
            <Provider value={{type, setType}}>
                <div className="HomePage__wrapper">
                    <Text view="title" className='PageTitle' >{`List of organization repositories`}</Text>
                    <SearchModule/>
                    <ReposList/>
                </div>
            </Provider>
        </React.Fragment>
            
    )
}

export default HomePage