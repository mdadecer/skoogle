
import { useSelector, useDispatch } from 'react-redux'
const Data = ({ data }) => {
    const contentSelected = useSelector((state) => state.selector);
    return (
        <p className="dataItem">{contentSelected.content === 'company' ? data.companies_name : contentSelected.content === 'videos' ? data.videos_name: data.skaters_name}</p>
    )
}
export default Data