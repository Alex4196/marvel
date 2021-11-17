import './App.css';
/* import Cover from "./Components/Cover" */
/* import NavBar from './Components/NavBar/NavBar';  */
import React from 'react';
import { Route, Routes  } from "react-router-dom";
/* import About from './Components/About/About'; */
/* import Cards from './Components/Cards'
import SearchBar from "./Components/SearchBar" */
import Home from "./Components/Home"
import CardsDetail from "./Components/CardsDetail"
import LandingPage from "./Components/LandingPage"
import Favorites from "./Components/Favorites"
import './App.css';



function App() {

  return (
    <>
     
      <Routes>
      <Route path="/" exact element={<LandingPage/>} /> 
      <Route path="/home" exact element={<Home/>} />  
        <Route path="/character/:id" element={<CardsDetail/>} />
        <Route path="/favs" element={<Favorites/>} />
      </Routes>
    </>
  );
}

export default App;
