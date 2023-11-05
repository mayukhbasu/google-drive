import {
  UserInfoState,
  UserActionTypes,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
} from '../types/UserTypes';

const initialState: UserInfoState = {
  loading: false,
  userInfo: {
    name: '',
    email: ''
  },
  error: null
}

const userReducer = (state = initialState, action: UserActionTypes): UserInfoState => {
  switch(action.type) {
    case FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: null
      };
    case FETCH_USER_INFO_FAILURE:
      return {
        loading: false,
        userInfo: null,
        error: action.payload
      };
    default:
      return state
  } 
}

export default userReducer;