import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LogoutActions } from "../types/logoutTypes";

interface UserAfterLoggedoutState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState : UserAfterLoggedoutState = {
  isAuthenticated: false,
  loading: false,
  error: null
}

export const logoutReducer = (state = initialState, action: LogoutActions): UserAfterLoggedoutState => {
  switch(action.type) {
    case LOGOUT_REQUEST: 
      return {
        ...state,
        loading: true
      }
      case LOGOUT_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: false
        }
      case LOGOUT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default:
        return state
  }
}