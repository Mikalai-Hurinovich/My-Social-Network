import axios from "axios";

export const UsersApi = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            }).then(response => response.data)
    },
    authMe: () => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(response => response.data)
    },
    profileLink: (userId: number) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data)
    },
    unfollowUser:  (userId: number ) => {
      return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f015f167-f05a-4dd0-9844-073a3b62bf41'
            }
        }).then(response => response.data)
    },
    followUser:  (userId: number ) => {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},{
            withCredentials: true,
            headers: {
                'API-KEY': 'f015f167-f05a-4dd0-9844-073a3b62bf41'
            }
        }).then(response => response.data)
    },
}
