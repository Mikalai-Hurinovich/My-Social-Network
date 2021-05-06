import {applyMiddleware, combineReducers, createStore} from 'redux'
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SideBarReducer from "./SideBarReducer";
import usersReducer from './users-reducer';
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';

// наш стейт
let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: SideBarReducer,
    usersPage: usersReducer,
    auth: AuthReducer
});
// автоматически создать типизацию для ф-ий с пом. конструкции ReturnType<typeof *Имя ф-ии*>
export type ReduxRootState = ReturnType<typeof reducers>
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;

// @ts-ignore
window.store = store
