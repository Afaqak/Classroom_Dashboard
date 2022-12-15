import { createAction } from "../../lib/utils"
import { userActionType } from "./user.type";
export const setCurrentUser = (user) => createAction(userActionType.SET_CURRENT_USER, user);