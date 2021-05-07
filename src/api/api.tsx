import axios from "axios";

// DAL - DATA ACCESS LAYER
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1a819671-3533-4e6e-9af6-dd31d90f39b6'
    }
})

export const UsersApi = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
    },
    unfollowUser: (userId: number) => {
        return instance.delete(`follow/${userId}`, {}).then(response => response.data)
    },
    followUser: (userId: number) => {
        return instance.post(`follow/${userId}`, {}, {}).then(response => response.data)
    },
    profileLink: (userId: number) => {
        console.warn('Obsolete method.Please, use profileAPI object')
        return profileAPI.profileLink(userId)
    }
}

export const profileAPI = {
    profileLink: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
            .then(response => response.data
            )
    }
}
export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`, {}).then(response => response.data)
    }
}
