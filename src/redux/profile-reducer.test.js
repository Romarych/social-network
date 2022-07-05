import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "It's my first post!", likes: 15 },
        { id: 2, message: "Hi, how are you?", likes: 20 },
        { id: 3, message: "I am React developer", likes: 0 }
    ]
}

test("length of posts should be incremented", () => {
    //1 test data
    let action = addPostCreator("test succes")
    // 2 action
    let newState = profileReducer(state, action)
    //3 expectation
    expect( newState.posts.length).toBe(4)
});

test("message of new posts should be correct", () => {
    //1 test data
    let action = addPostCreator("test succes")
    // 2 action
    let newState = profileReducer(state, action)
    //3 expectation
    expect( newState.posts[3].message).toBe("test succes")
});

test("after deleting length of messages should be decrement", () => {
    //1 test data
    let action = deletePost(1)
    // 2 action
    let newState = profileReducer(state, action)
    //3 expectation
    expect( newState.posts.length).toBe(2)
});

test("after deleting length should not be decrement if id is incorrect", () => {
    //1 test data
    let action = deletePost(100)
    // 2 action
    let newState = profileReducer(state, action)
    //3 expectation
    expect( newState.posts.length).toBe(3)
});