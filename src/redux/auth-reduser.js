import { stopSubmit } from "redux-form";
import {authAPI} from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA"

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,  
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.getAuthUserData()
    if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let messages = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: messages }))
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer;
