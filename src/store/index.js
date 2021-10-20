import { createStore } from 'redux'
import User from '../models/User'
import logo from '../assets/profile_picture.jpg'

const initialState = {
    user: new User("Valentin", "Valoulou", logo),
    tweets: []
  }
  
  const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_NAME') {
      return Object.assign({}, state, {
        user: action.payload
      })
    }
    if (action.type === 'ADD_TWEET') {
      return Object.assign({}, state, {
        tweets: [...state.tweets, action.payload]
      })
    }
    if (action.type === 'REMOVE_TWEET') {
      return Object.assign({}, state, {
        tweets: state.tweets.filter(tweet => action.payload !== tweet)
      })
    }
    return state
  }

const store = createStore(reducer)

export default store;