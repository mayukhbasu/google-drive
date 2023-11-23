import { FILE_UPLOAD_ERROR, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, FileActionType, FileUploadResponse } from "../types/fileActionTypes";

const initialState: FileUploadResponse = {
  loading: false,
  successResponse: {
    message: ''
  },
  errorResponse: {
    error: ''
  }
}

const fileUploadReducer = (state =  initialState, action: FileActionType):FileUploadResponse => {
  switch(action.type) {
    case FILE_UPLOAD_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FILE_UPLOAD_SUCCESS:
      return {
        loading: false,
        successResponse: action.payload,
        errorResponse: null
      }
    case FILE_UPLOAD_ERROR:
      return {
        loading: false,
        successResponse: null,
        errorResponse: action.payload
      }
    default:
      return state
  }
}

export default fileUploadReducer;