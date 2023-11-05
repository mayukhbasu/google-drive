import { Dispatch } from "redux";
import Cookies from 'js-cookie';

import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../types/logoutTypes"

export const logoutUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type: LOGOUT_REQUEST});
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response.ok) {
        dispatch({type: LOGOUT_SUCCESS});
        Cookies.remove('access_token');
        window.location.href = '/';
      } else {
        throw new Error('Logout failed.');
      }
    } catch(error) {
      dispatch({
        type: LOGOUT_FAILURE,
        payload: 'Unknown logout error'
      })
    }
  }
}