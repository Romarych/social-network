import { getAuthUserData } from "./auth-reduser";
import { InferActionsTypes } from "./redux-store";

let initialState = {
    initialized: false,
}

export type InitialStateType =  typeof initialState

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCES':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    initializedSucces: () => ({ type: 'INITIALIZED_SUCCES' } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSucces())
    })
  

}

export default appReducer;
