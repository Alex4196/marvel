import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { allCharacters } from "../actions/index";
import { useDispatch } from "react-redux";

const NavBar = ({isScrolling}) => {
    const dispatch = useDispatch()  
    function handleonClick(e) {
        e.preventDefault();
        dispatch(allCharacters());
    }

    return (
        <nav  >
            <div className={styles.navbar}  >
            <div className={styles.searchbar} >
            <SearchBar />
            </div>
           <div >
            <NavLink className={styles.favs}  to="/favs" > <button className={styles.boton} >Favorites</button></NavLink>
            </div>
            
              <div className={styles.title}>
            <h1  onClick={(e) => handleonClick(e)}  >The amazing world of Marvel </h1>
            </div> 
            </div>
         
        </nav>
    )
}

export default NavBar