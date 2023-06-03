import React  from 'react';
import { Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { HomePage } from './Components/HomePage/HomePage';
import { CaverPage } from './Components/CaverPage/CaverPage';
import SinglPage from './Components/SingContent/SinglPage';
// import useFetch from './Components/API/useFetch';
// import { useSelector } from 'react-redux';
// import {store} from "./Redux/store";
function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Страница <code>{location.pathname}</code> не найдена!
      </h3>
      <Link to = "/">На главную</Link>
    </div>
  );
}
function App() {

  // const urlParse = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyhVKUWoUKLuI26hf5kZcEXRwjdGqscy0GDiNGCbHfzWiW7QQ_m2lrhyiQUKzZ7_9vLBgIPE7WMwXM/pub?output=csv";

  // useFetch(urlParse)
 
  // const loading_songs = useSelector(
  //   ({ songs_reducer: { loading_songs } }) => loading_songs
  // );
 
  // if(loading_songs) return null
  // const navigatorState = store.getState()
  // console.log("store", navigatorState);
  return (
    <div className="App">
      <Fragment>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>}/>
         <Route path="/cavers21" element={<CaverPage/> }/>
         <Route path="/cavers22" element={<CaverPage/>} />
         <Route path="/cavers23" element={<CaverPage/>} />
         <Route path="/cavers/:id" element={<SinglPage />} /> 
         <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
   </Fragment>
    </div>
  );
}

export default App;
