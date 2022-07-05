const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "John" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Andrey" }
    ],

    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "OleWhere are you from?" },
        { id: 3, message: "Hi. I live in Lviv" },
        { id: 4, message: "Yo" }
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: text }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })


export default dialogsReducer;











// if (action.type === SEND_MESSAGE) {
//     let newMessage = {
//         key: 5,
//         id: 5,
//         message: state.newMessageText,
//     }
//     state.messages.push(newMessage)
//     state.newMessageText = ""
    
// } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//     state.newMessageText = action.newText
    
// }
// return state;