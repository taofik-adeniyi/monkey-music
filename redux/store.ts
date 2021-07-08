import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers"
// import { composeWithDevTools } from 'remote-redux-devtools';

// const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

// const store = createStore(rootReducer, compose(applyMiddleware()));

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store