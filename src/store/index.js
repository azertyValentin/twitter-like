import { createStore } from 'redux'
import Tweet from '../models/Tweet'
import User from '../models/User'

const initialState = {
    user: new User("Valentin", "Valoulou"),
    tweets: [new Tweet(new User("Valentin", "Valoulou"), "15 sept", "salut")]
  }
  
  const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_NAME') {
      return Object.assign({}, state, {
        user: action.payload
      })
    }
    return state
  }

const store = createStore(reducer)

export default store;