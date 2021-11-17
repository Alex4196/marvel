import React from "react";
 import {    useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { allCharacters,  filterBy, addCharacterFavorite, removeCharacter } from "../actions/index";
import { Link } from "react-router-dom";

import styles from './Home.module.css'
import NavBar from "./NavBar"
import { IoTrashOutline } from "react-icons/io5"; 
import { IoStarOutline } from "react-icons/io5"; 


function Home() {

    const dispatch = useDispatch()  
    const allChar = useSelector((state) => state.characters) 

    
    

   useEffect(() => { 

        dispatch(allCharacters());
        
    }, [dispatch])


   
    function handleOnFilter(e){
        dispatch(filterBy(e.target.name, e.target.value));
    };

    return (
        
        <div className={styles.container}  >
            <NavBar/>
            <div >
  
  <div>
  <select name='stories' onChange={handleOnFilter} className={styles.filter} >
  
                    <option hidden disabled selected>Stories...</option>
                    {
                       allChar && allChar?.map((e) => e.stories.map((n) => <option value={n}>{n}</option>))
                    }
                  
                </select>

                <select name='series' onChange={handleOnFilter} className={styles.filter} >
                
                    <option hidden disabled selected>Series...</option>
                    {
                       allChar && allChar?.map((e) => e.series?.map((p) => <option value={p}>{p}</option>))
                    }
                
                </select>
                <select name='comics' onChange={handleOnFilter} className={styles.filter} >
  
                    <option hidden disabled selected>Comics...</option>
                    {
                       allChar && allChar?.map((e) => e.comics.map((c) => <option value={c}>{c}</option>))
                    }
                  
                </select>
    
  <div className={styles.container}>
    {
      allChar.map( e => (

          <div className={styles.cards} >
        <div className={styles.box}>
        <Link to={`/character/${e.id}`} >
            
        <img className={styles.img} src={ e.thumbnail}/>
        </Link>
       <p className={styles.title}> {e.name}</p>  
       <button  key={e.id} className={styles.boton1} onClick={() => dispatch(removeCharacter( e.id))}><IoTrashOutline/></button>
      <button className={styles.boton} onClick={() => dispatch(addCharacterFavorite({ name: e.name, thumbnail: e.thumbnail, id: e.id}))}><IoStarOutline/></button>
   </div>
   </div>
   
      ))
    }
  </div>
  </div>
    </div>   
    <h5 className={styles.monks}>Media.Monks</h5>
        </div>
    )
}

export default Home
