import {usersAPI} from "../api/api";
import { updateObjectInArrray } from "../utils/object-heipers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    // const followUnfollowFlow = (followed, userId) => {
    //     return {
    //         ...state,
    //         users: state.users.map(u => {
    //             if (u.id === userId) {
    //                 return {...u, followed: followed}
    //             }
    //             return u;
    //         })
    //     }
    // }
    
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArrray(state.users, action.userId, "id", {followed: true})
            }
            //return followUnfollowFlow(true, action.userId)

            // return {
            //     ...state,
            //     users: state.users.map(u => {
            //         if (u.id === action.userId) {
            //             return {...u, followed: true}
            //         }
            //         return u;
            //     })
            // }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArrray(state.users, action.userId, "id", {followed: false})
            }

            //return followUnfollowFlow(false, action.userId)

            // return {
            //     ...state,
            //     users: state.users.map(u => {
            //         if (u.id === action.userId) {
            //             return { ...u, followed: false }
            //         }
            //         return u;
            //     })
            // }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {           
                ...state, followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

//ActionCrators
export const acceptFollow = (userId) => ({ type: FOLLOW, userId })
export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId})
export const setUsers = (users) => ({ type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

//ThunkCreators
export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMetod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMetod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), acceptUnfollow)
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow)
}

// export const follow = (userId) => async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId))
//     let data = await usersAPI.follow(userId)
//     if (data.resultCode === 0) {
//         dispatch(acceptFollow(userId))
//     }
//     dispatch(toggleFollowingProgress(false, userId))
// }

// export const unfollow = (userId) => async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId))
//     let data = await usersAPI.unfollow(userId)
//     if (data.resultCode === 0) {
//         dispatch(acceptUnfollow(userId))
//     }
//     dispatch(toggleFollowingProgress(false, userId))
// }

export default usersReducer;













//if (action.type === ADD_POST) {
    //         let newPost = {
    //             key: 5,
    //             id: 5,
    //             message: state.newPostText,
    //             likes: 0,
    //         };
    //         state.posts.push(newPost);
    //         state.newPostText = ""
        
    //     } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         state.newPostText = action.newText;
           
    // }
    //     return state;