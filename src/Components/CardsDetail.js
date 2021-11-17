import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterDetail } from '../actions';
import { useEffect } from 'react';
import styles from './CardsDetail.module.css';

function CardsDetail() {
    const dispatch = useDispatch()
     const {id} = useParams() 

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    }, [dispatch])


    const myCharacter = useSelector((state) => state.detail)
/*    console.log( "detalleeee", myCharacter  ) */
    return (
        <div>
             <Link to='/home'>
                            <button className={styles.home}> Go back! </button>
                        </Link>
                        <div classname={styles.contenedor}  >
                        <div className={styles.thecard}>
                        <div className={styles.thefront}>
                       
                        
                       <h1 className={styles.name} >{myCharacter[0]?.name}</h1>
                     
                        <div  className={styles.image} >  
                       {myCharacter[0]?.thumbnail ? 
                       <img className={styles.image} src={myCharacter[0]?.thumbnail} alt=''  /> : null }
                   </div> 
                   <h1 className={styles.description} >{myCharacter[0]?.description}</h1>
                   {myCharacter[0]?.comics.length ?
                   <h2 className={styles.comics} >Comics:  {myCharacter[0]?.comics?.map((e) => 
                <li>{e.split(',')[0]}</li>)
            }</h2> : "This character has no comics!" }
                   <div className={styles.drag} >
                   </div>
                   </div>
                   <div className={styles.theback}> 
                   <div className={styles.column}>
                   {myCharacter[0]?.stories.length ?
                   <h2 className={styles.steps} > Stories: {myCharacter[0]?.stories?.map((e) => 
                <li>{e.split(',')[0]}</li>)
            }</h2> : "This character has no stories!" }
            {myCharacter[0]?.series.length ?
                   <h2 className={styles.steps} >Series:{myCharacter[0]?.series?.map((e) => 
                <li>{e.split(',')[0]}</li>)
            }</h2> : "This character has no series!" }
            </div>
                   </div> 
                   
                   </div>
                   </div>

        </div>
    )       
}


export default CardsDetail
