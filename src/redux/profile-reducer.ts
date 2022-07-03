import {FormAction, stopSubmit} from "redux-form";
import { ResultCodesEnum } from "../api/api";
import { profileAPI } from "../api/profile-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: "It's my first post!", likes: 15},
        {id: 2, message: "Hi, how are you?", likes: 20},
        {id: 3, message: "I am React developer", likes: 0}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            let text = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: text, likes: 0}]
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'DELETE_POST':
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }

        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),
}

type ThunkType = BaseThunkType<ActionsTypes | FormAction> //ReturnType<typeof stopSubmit> 


export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        data.resultCode === ResultCodesEnum.Success && dispatch(actions.setStatus(status))
    } catch (error) {
        // alert("Some occured error")
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            dispatch(getProfile(userId))
        } else {
            throw new Error("UserId can't be null")
        }
    } else {
        dispatch(stopSubmit("profile", { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer

