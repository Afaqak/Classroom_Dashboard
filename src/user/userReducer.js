import { userActionType } from "./user.type";

const initialState = {
    currentUser: null,
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default:
            return state;
    }
}