import { ADD_ARTICLE } from "../../Constants/index";

const initialState = {
    articles: [],
    navShow:false,
  };
  function rootReducer(state = initialState, action) {
      
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    return state;
  }
  export default rootReducer;