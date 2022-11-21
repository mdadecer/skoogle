import Data from "./data.js"
import "./ListPage.css"
import { useSelector, useDispatch } from 'react-redux'
import SkatersContent from '../content_components/SkatersContent';

const ListPage = ( {searchResults}) => {
    const contentSelected = useSelector((state) => state.selector);
    const results = searchResults.map(data => <Data key={contentSelected.content === 'company' ? data.companies_name : contentSelected.content === 'videos' ? data.videos_name: data.skaters_name} data = {data}/> )
    const content = results?.length ? results: <p></p>


    return (
         <div className="searchList"style={{
            display: contentSelected.showSearchList ? 'block':'none'
         }}> 
            {content} 
         </div> 
    )
}
export default ListPage