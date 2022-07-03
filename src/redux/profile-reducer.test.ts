import { PostType, ProfileType } from "../types/types";
import profileReducer, { actions } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "It's my first post!", likes: 15 },
        { id: 2, message: "Hi, how are you?", likes: 20 },
        { id: 3, message: "I am React developer", likes: 0 }
    ],
    profile: null,
    status: ''
}

test("length of posts should be incremented", () => {
    let action = actions.addPost("test succes")
    let newState = profileReducer(state, action)
    expect( newState.posts.length).toBe(4)
})

test("message of new posts should be correct", () => {
    let action = actions.addPost("test succes")
    let newState = profileReducer(state, action)
    expect( newState.posts[3].message).toBe("test succes")
})

test("after deleting length of messages should be decrement", () => {
    let action = actions.deletePost(1)
    let newState = profileReducer(state, action)
    expect( newState.posts.length).toBe(2)
})

test("after deleting length should not be decrement if id is incorrect", () => {
    let action = actions.deletePost(100)
    let newState = profileReducer(state, action)
    expect( newState.posts.length).toBe(3)
})