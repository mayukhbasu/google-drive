export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
  payload: string
}

export type LogoutActions = LogoutRequestAction | LogoutSuccessAction | LogoutFailureAction