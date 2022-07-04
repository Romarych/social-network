import axios from "axios"
import { UserType } from "../types/types"

export const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "06cb38df-5e2f-46cc-b0e3-c3b12feecf16" },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
})

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}, RC = ResultCodesEnum | ResultCodeForCaptchaEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}