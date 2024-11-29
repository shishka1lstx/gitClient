import ReposList from "../../modules/reposList"
import SearchInput from "../../components/searchInput"
import React from "react"


export type homePageProps = {
    
}



const HomePage: React.FC<homePageProps> = () =>{
    return(
        <React.Fragment>
            <SearchInput/>
            <ReposList/>
        </React.Fragment>
    )
}

export default HomePage