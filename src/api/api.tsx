import axios from "axios";
// DAL - DATA ACCESS LAYER

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f015f167-f05a-4dd0-9844-073a3b62bf41'
    }
})

export const UsersApi = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
    },
    authMe: () => {
        return instance.get(`auth/me`, {}).then(response => response.data)
    },
    profileLink: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    unfollowUser: (userId: number) => {
        return instance.delete(`follow/${userId}`, {}).then(response => response.data)
    },
    followUser: (userId: number) => {
        return instance.post(`follow/${userId}`, {}, {}).then(response => response.data)
    },
}
