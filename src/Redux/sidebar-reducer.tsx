import {SideBarType} from "../components/Navbar/Navbar";

let initialState = {
    friends: [
        {id: 1, name: "Микола", img: 'https://html5css.ru/w3images/avatar2.png'},
        {
            id: 2,
            name: "Дима",
            img: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
        },
        {id: 3, name: "Малыха", img: 'https://html5css.ru/howto/img_avatar2.png'},
    ]
};
export type SideBarActionsType = {}
const SideBarReducer = (state: SideBarType = initialState, action: SideBarActionsType) => {
    return state;
}

export default SideBarReducer;
