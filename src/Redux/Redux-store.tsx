import {combineReducers, createStore} from 'redux'
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SideBarReducer from "./SideBarReducer";


// наш стейт
let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: SideBarReducer
});

export type ReduxRootState = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;
