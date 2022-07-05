import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
// const UPDATE_POST = "UPDATE_POST";
const  SET_USER_PROFILE = "SET_USER_PROFILE";
const  SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"

let initialState = {
    posts: [
        { id: 1, message: "It's my first post!", likes: 15 },
        { id: 2, message: "Hi, how are you?", likes: 20 },
        { id: 3, message: "I am React developer", likes: 0 }
    ],
    // newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            // let text = state.newPostText
            let text = action.newPostText
            return {
                ...state,
                // newPostText: "",
                posts: [...state.posts, { id: 5, message: text, likes: 0 }]

            }
        // case UPDATE_POST:
        //     return {
        //         ...state,
        //         newPostText: action.text
        //     }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }
            case DELETE_POST:
                return {
                    ...state, posts: state.posts.filter(p => p.id != action.postId)
                }
        default:
            return state;
    }
}

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText })
// export const updatePostCreator = (text) => ({ type: UPDATE_POST, text})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getProfile = (userId) => async (dicpatch) => {
    let data = await profileAPI.getProfile(userId)
    dicpatch(setUserProfile(data))
}

export const getStatus = (status) => async (dicpatch) => {
    let data = await profileAPI.getStatus(status)
    dicpatch(setStatus(data.data))
}

export const updateStatus = (status) => async (dicpatch) => {
    let data = await profileAPI.updateStatus(status)
    { data.data.resultCode === 0 && dicpatch(setStatus(status)) }
}

// export const updateStatus = (status) => (dicpatch) => {
//     profileAPI.updateStatus(status).then(data => {
//         {data.data.resultCode === 0 && dicpatch(setStatus(status))}
//     })
// }

export default profileReducer;













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