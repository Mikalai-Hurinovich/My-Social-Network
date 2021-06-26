import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SideBarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import AuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
// наш стейт
let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: SideBarReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer
});
// автоматически создать типизацию для ф-ий с пом. конструкции ReturnType<typeof *Имя ф-ии*>
export type ReduxRootState = ReturnType<typeof reducers>

// @ts-ignore
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
export default store;

// @ts-ignore
window.store = store
