import menuReducer from "./menu-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    menu: menuReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    profilesPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)));

export default store;