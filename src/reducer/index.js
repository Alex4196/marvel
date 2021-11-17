const initialState = {
    
     characters: [],
     detail: [],
     filterCharacter: [],
     characterFavorite: []
   }
   
   
   
   function rootReducer(state = initialState, action) {
    const { type, payload } = action;
     switch (type) {

        case "GET_CHARACTERS":
          const api = payload.map((e) => {
            return {
              id: e.id,
              name: e.name,
              description: e.description,
              thumbnail: `${e.thumbnail.path}.${e.thumbnail.extension} `,
              comics: e.comics.items.map(el =>  el.name ),
              series: e.series.items.map(s => s.name),
              stories: e.stories.items.map(n => n.name),
            }
        })
     
      return {
        ...state,
        characters: api,
        characterFavorite: api, 
      };

      case "REMOVE_CHARACTER":
        console.log("llegaaaa")
        return {
          ...state,
          characters: state.characters.filter(e => e.id !== action.payload)
        };
     

      case "GET_CHARACTER_DETAIL":

      return {
        ...state,
        detail: action.payload
      };
 
         case "GET_NAME_CHARACTER":

          
          const nameCharacter= payload.map((e) => {
            
            return {
              id: e.id,
              name: e.name,
              description: e.description,
              thumbnail: `${e.thumbnail.path}.${e.thumbnail.extension} `,
              comics: e.comics.items.map(el =>  el.name ),
              series: e.series.items.map(s => s.name),
              stories: e.stories.items.map(n => n.name),
            }
        })
             return {
               ...state,
               characters:  nameCharacter
             }


        case "FILTER_BY":
          console.log("estabien")
          if (action.payload.filter === 'comics') {
            return {
                ...state,
                characters: state.characters.filter(e=> e.comics.includes(action.payload.selected))
            }
          }
          else if (action.payload.filter === 'series') {
            return {
                ...state,
                characters: state.characters.filter(e=> e.series.includes(action.payload.selected))
            }
          }
          else {
            return {
                ...state,
                characters: state.characters.filter(e => e.stories.includes(action.payload.selected))
            }
          }
          
    case "ADD_CHARACTER_FAVORITE":
      return {
        ...state,
        characterFavorite: [...state.characterFavorite, action.payload]
      };
   
      case "REMOVE_CHARACTER_FAVORITE":
        console.log("reducererer")
        return {
          ...state,
          characterFavorite: state.characterFavorite.filter(e => e.id !== action.payload)
        };

       default: return state;
     }
   }
   export default rootReducer;
   