import { Dispatch } from "redux";
import { FETCH_USER_INFO_FAILURE, FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_SUCCESS, User, UserActionTypes } from "../types/UserTypes";
import axios from "axios";

const fetchUserInfoRequest = (): UserActionTypes => {
  return {
    type: FETCH_USER_INFO_REQUEST
  }
}

const fetchUserInfoSuccess = (user: User): UserActionTypes => {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload: user
  }
}

const fetchUserInfoFailure = (error: string): UserActionTypes => {
  return {
    type: FETCH_USER_INFO_FAILURE,
    payload: error
  }
}

export const fetchUserInfo = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUserInfoRequest());
    axios.get<User>('/api/auth/userinfo',{ withCredentials: true })
    .then(response => dispatch(fetchUserInfoSuccess(response.data)))
    .catch(error => dispatch(fetchUserInfoFailure(error)))
  }
}