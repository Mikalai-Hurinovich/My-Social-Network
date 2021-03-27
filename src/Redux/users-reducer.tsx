import React from "react";

type UsersType = {
    users: UserType[]
}
type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
let initialState: UsersType = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Микола",
            status: 'Hello, IT!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            fullName: "Дима",
            status: 'Hello, Travel!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: true,
            fullName: "Малыха",
            status: 'Hello, Life!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            followed: false,
            fullName: "Арчибальд",
            status: 'Hello, Phila!',
            location: {city: 'Philadelphia', country: 'USA'}
        },
        {
            id: 5,
            followed: true,
            fullName: "Витя",
            status: 'Hello, Chicago!',
            location: {city: 'Chicago', country: 'USA'}
        },
        {
            id: 6,
            followed: false,
            fullName: "Артур",
            status: 'Hello, Boston!',
            location: {city: 'Boston', country: 'USA'}
        },
    ]
}
type Actiontype = followACType | unfollowACType
const UserReducer = (state: UsersType = initialState, action: Actiontype): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            let stateCopy = {...state, users: [...state.users]}
        default:
            return state;
    }

}

type followACType = { type: 'FOLLOW', userID: string }
type unfollowACType = { type: 'UNFOLLOW', userID: number }
export const followAC = (userID: number) => ({type: 'FOLLOW', userID});
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID});
export default UserReducer;
