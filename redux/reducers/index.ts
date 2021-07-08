import { combineReducers } from "redux"
import registerReducer from "./registerReducer"
import promptReducer from "./promptReducer"


const rootReducer = combineReducers({
    register: registerReducer,
    prompt: promptReducer
})

export default rootReducer