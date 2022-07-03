import { InferActionsTypes } from "./redux-store"

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}
let initialState = {
    dialogs: [
        { id: 1, name: "John" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Andrey" }
    ] as Array<DialogType>,

    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "OleWhere are you from?" },
        { id: 3, message: "Hi. I live in Lviv" },
        { id: 4, message: "Yo" }
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            let text = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: text }]
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    sendMessage: (newMessageText: string) => ({ 
        type: 'SEND_MESSAGE', 
        newMessageText 
    } as const)
}

export default dialogsReducer;


