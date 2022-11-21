import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo.js'
import ContentWindow from './components/ContentWindow';
import MenuBarHolder from './components/MenuBarHolder';

// Michael's imports (backend)

import {useEffect, useState} from 'react' //runs function when page renders
import SearchBar2 from './components/SearchBar2'
import ListPage from './components/ListPage'
import { getSkaters, getVideos, getCompanies } from 'axios'
import { useSelector } from 'react-redux' // needed 







function App() {

  // searchbar shit
  const[data, setData] = useState([])
  const[searchResults, setSearchResults] = useState([])
  const contentSelected = useSelector((state) => state.selector); // needed for searchbar data

  useEffect(() => {
    if (contentSelected.content === 'company'){
      getCompanies().then(json => {
        setData(json)
        return json
      }).then (json => {
        setSearchResults(json)
      })
    } else if (contentSelected.content === 'videos'){
      getVideos().then(json => {
        setData(json)
        return json
      }).then (json => {
        setSearchResults(json)
      })
    } else if (contentSelected.content === 'skaters'){
      getSkaters().then(json => {
        setData(json)
        return json
      }).then (json => {
        setSearchResults(json)
      })
    }
    }, [contentSelected.content])
  
  // end of searchbar shit

  const menuList = [
    'music',
    'company',
    'skaters',
    'videos',
  ]

  const menuList1 = [
    'company',
    'music',
    'skaters',
    'videos',
  ]

  return (
    <div className="App">

        <MenuBarHolder menuList={menuList} menuList1={menuList1}></MenuBarHolder>
        <SearchBar2 data={data} setSearchResults={setSearchResults} />
        <ListPage searchResults={searchResults} />
        <ContentWindow></ContentWindow>
    </div>
  );
}

export default App;
