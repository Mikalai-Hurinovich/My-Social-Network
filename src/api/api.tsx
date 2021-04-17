import axios from "axios";


export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
}

export const authMe = () => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => response.data)
}
export const profileLink = (userId: number) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => response.data)
}
