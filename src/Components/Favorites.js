import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Link } from 'react-router-dom';
import styles from './Favorites.module.css';

import { IoTrashOutline } from "react-icons/io5";
 import {removeCharacterFavorite} from "../actions/index" 



export default function Favorites() {


  const favCharacters = useSelector(state => state.characterFavorite);

  console.log("global",favCharacters)
 
   const dispatch = useDispatch(); 


  return (

    <div>
       <header >
            <div>
            <Link exact to="/" ></Link>
            </div>
            <nav>
                
                    
                    <Link to='/home'>
                            <button  className={styles.home} > Go back! </button>
                       </Link>
                        
                   
              
            </nav>
        </header>
      
      <h2  className={styles.title}>Favorites</h2>
     <div className={styles.container}>
        {
          favCharacters && favCharacters.map(e => (
            <div className={styles.cards} >
            <div className={styles.box}>
              <button  onClick={() => dispatch(removeCharacterFavorite(e.id))} className={styles.boton1}><IoTrashOutline/></button>
              <Link to={`/character/${e.id}`}>
              <img  className={styles.img} src={e.thumbnail} alt='img not found' height='300' width='220'/>
              </Link>
              <span className={styles.title}> {e.name} </span>
            </div>
            </div>
          ))
        }
    </div>
    </div>

  )
}