import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "06cb38df-5e2f-46cc-b0e3-c3b12feecf16" },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
})

export const  usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
}

export const  profileAPI = {
    getProfile(userId) {
        // console.warn("Obsolete method. Please profileAPI object.")
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`, {
        }).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        })
    },

    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    },
}






