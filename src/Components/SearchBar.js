import React, { useState }  from 'react';
/* import { useState } from 'react'; */
import {useDispatch} from 'react-redux';
import { getCharacterName } from '../actions/index';
import styles from "./SearchBar.module.css";
 import { IoSearchSharp } from "react-icons/io5"; 
/* import Swal from 'sweetalert2' */



export default function SearchBar(){

     const dispatch = useDispatch() 

    const [name, setName] = useState("")


 const handleSubmit=(e) =>{
    e.preventDefault()
    setName("");
    dispatch(getCharacterName(name)) 
    } 


    const handleInputChange =(e) =>{
 
        e.preventDefault()
        setName(e.target.value)
        
        }

        const handleOnKeyDown = (e) => {

            if (e.key === 'Enter') {
    
                e.preventDefault();
                dispatch(getCharacterName(name));
                setName('');
    
            }
    
        };
    
return (
    <div className={styles.wrap}>
        <div className={styles.search}>

<input className={styles.searchTerm} value={name} type= 'text' placeholder='Search...' onKeyDown={handleOnKeyDown} onChange={ handleInputChange}/>
<button className={styles.searchButton}  type='submit'  onClick={ handleSubmit} >  <IoSearchSharp/> </button>
</div>
    </div>
)
}