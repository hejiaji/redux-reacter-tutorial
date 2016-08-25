import { combineReducers } from 'redux'
import counter1 from './counter'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter1
})

export default rootReducer