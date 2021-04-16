import {combineReducers, createStore} from 'redux'
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SideBarReducer from "./SideBarReducer";
import usersReducer from './users-reducer';
import AuthReducer from "./Auth-reducer";


// наш стейт
let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: SideBarReducer,
    usersPage: usersReducer,
    auth: AuthReducer
});

export type ReduxRootState = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;

// @ts-ignore
window.store = store
