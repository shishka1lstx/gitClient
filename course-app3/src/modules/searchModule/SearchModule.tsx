import SearchInput from "../../components/searchInput";
import TypeSelector from "../../components/TypeSelector";
import './serachModule.scss'



const SearchModule = () => {
   

    const options = [ 
        {key: 'all', value: 'All'},
        {key: 'member', value: 'Member'},
        {key: 'owner', value: 'Owner'},
       
    ];

   
    return(
        <div className="searchModule">

            <TypeSelector value={'All'} options={options}></TypeSelector>
            <SearchInput/>
        </div>
    )
}

export default SearchModule