import { GetItemsType, instance, ResponseType } from "./api"

export const  usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },

    async unfollow (id: number) {
        const response = await instance.delete<ResponseType>(`follow/${id}`)
        return response.data
    },

    async follow(id: number) {
        const response = await instance.post<ResponseType>(`follow/${id}`)
        return response.data
    },
}