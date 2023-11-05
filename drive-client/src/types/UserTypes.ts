export interface UserInfoState {
  loading: boolean;
  userInfo: User | null;
  error: string | null;
}

export interface User {
  email: string;
  name: string;
}

export const FETCH_USER_INFO_REQUEST = 'FETCH_USER_INFO_REQUEST';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';

interface FetchUserInfoRequestAction {
  type: typeof FETCH_USER_INFO_REQUEST;
}

interface FetchUserInfoSuccessAction {
  type: typeof FETCH_USER_INFO_SUCCESS;
  payload: User;
}

interface FetchUserInfoFailureAction {
  type: typeof FETCH_USER_INFO_FAILURE;
  payload: string;
}

export type UserActionTypes = FetchUserInfoRequestAction | FetchUserInfoSuccessAction | FetchUserInfoFailureAction;
