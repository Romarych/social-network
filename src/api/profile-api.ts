import { PhotosType, ProfileType } from "../types/types"
import { instance, ResponseType } from "./api"

type SavePhotosResponseDataType = {
    photos: PhotosType
}

export const  profileAPI = {
    async getProfile(userId: number) {
        const response = await instance.get<ProfileType>(`profile/${userId}`)
        return response.data
    },
    async getStatus (userId: number) {
        const response = await instance.get<string>(`profile/status/${userId}`)
        return response.data
    },
    async updateStatus(status: string) {
        const response = await instance.put<ResponseType>(`profile/status`, {status: status})
        return response.data
    },
    async savePhoto(photoFile: File) {
        let formData = new FormData()
        formData.append("image", photoFile)
        const response = await instance.put<ResponseType<SavePhotosResponseDataType>>(`profile/photo`, formData)
        return response.data
    },
    async saveProfile(profile: ProfileType) {
        const response = await instance.put<ResponseType>(`profile`, profile)
        return response.data
    }
}