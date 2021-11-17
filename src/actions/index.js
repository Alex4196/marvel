import axios from 'axios';
import Swal from 'sweetalert2'

export function getCharacterName(name) {

    return async function (dispatch) {
      try{
        var json = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=d76487b547e08d11910b55c98fd5986b&hash=4b9dc3e01f4c78a935d1690925be61ee`)
        /* var jsonApi = json.data.data.results.map(e => e.name)  */
        var jsonApi = json.data.data.results
         
        return dispatch({
          type: "GET_NAME_CHARACTER",
          payload: jsonApi
        })
      }catch (err) {
        Swal.fire({
           title: 'The Character does not exist',
           text: '',
           icon: 'error',
           confirmButtonText: 'Cool'
         });
       }
     }
  } 

  export function removeCharacter(id) {
    console.log("idddd", id)
    return { type: "REMOVE_CHARACTER", payload: id };
  }

  export function allCharacters() {
    return async function (dispatch) {
      var json = await axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d76487b547e08d11910b55c98fd5986b&hash=4b9dc3e01f4c78a935d1690925be61ee')
      return dispatch({
        type: "GET_CHARACTERS",
        payload: json.data.data.results
      })
    }
  }

  export function getCharacterDetail(id) {
    return async function (dispatch) {
      var json = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=d76487b547e08d11910b55c98fd5986b&hash=4b9dc3e01f4c78a935d1690925be61ee`)
      const detalle = json.data.data.results.map(e => {
        return {
          name: e.name,
          description: e.description,
          thumbnail: `${e.thumbnail.path}.${e.thumbnail.extension} `,
          comics: e.comics.items.map(el =>  el.name ),
          series: e.series.items.map(s => s.name),
          stories: e.stories.items.map(n => n.name),
        }
      })
       console.log("dataaaa", detalle) 
      return dispatch({
        type: "GET_CHARACTER_DETAIL",
        payload: detalle
      })
    }
  }
  
  
  export function filterBy(filter, selected) {
    console.log("filtrooos", filter, selected)
    return {
      type: 'FILTER_BY',
      payload: {
          filter,
          selected
      },
    };
  };

  export function addCharacterFavorite(payload) {
    return {
      type: "ADD_CHARACTER_FAVORITE", payload
    };
  }

  export function removeCharacterFavorite(id) {
    console.log("id", id)
    return { type: "REMOVE_CHARACTER_FAVORITE", payload: id };
  }