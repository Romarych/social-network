import { Dispatch } from "redux";
import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    userId: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    isFetching: false,
    captchaUrl: null as null | string // if null, then captcha is not required
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({ 
        type: 'SET_USER_DATA', 
        payload: { userId, email, login, isAuth } 
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string | null) => ({ 
        type: 'GET_CAPTCHA_URL_SUCCESS', 
        payload: {captchaUrl}
    } as const)
}

type ThunkType = BaseThunkType<ActionsTypes | FormAction> //ReturnType<typeof stopSubmit> 

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getAuthUserData()

    if (data.resultCode === ResultCodesEnum.Success) {
        let { id, login, email } = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
        dispatch(actions.getCaptchaUrlSuccess(null))
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let messages = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: messages }))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))

}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
