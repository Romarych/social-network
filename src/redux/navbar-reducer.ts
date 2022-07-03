export type FriendType = {
    key: number
    id: number
    name: string
    src: string
}

let initialState = {
    friends: [
        { key: 1, id: 1, name: "Olena", src: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-50.png" },
        { key: 2, id: 2, name: "Oleg", src: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-50.png" },
        { key: 3, id: 3, name: "Igor", src: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-50.png" },
        { key: 4, id: 4, name: "Andrey", src: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-50.png" },
        { key: 5, id: 5, name: "Sasha", src: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-50.png" },
        { key: 6, id: 6, name: "John", src: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-50.png" }
    ] as Array<FriendType>,
}
export type InitialStateType = typeof initialState

const navbarReducer = (state = initialState): InitialStateType => {
    return state; 
}

export default navbarReducer;