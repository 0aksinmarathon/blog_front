import { combineReducers } from 'redux'
import counter from './count'
import user from './user/index'

export default combineReducers({ counter, user })
