
import {Link} from "react-router-dom";
import styles from "./LandingPage.module.css"

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allCharacters } from '../actions';
import Landing from './landing.jpg'

const LandingPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(allCharacters())
  }, [dispatch]
  );

  return (
<div className={styles.contenedor}>
      <div /* className={styles.contenedor} */>
        
    
          <Link to='/home'><button className={styles.boton}>Let's start exploring the Marvel world </button></Link>
      </div>
      </div>
  )
};




export default LandingPage;