import { Dispatch } from "redux";
import { FILE_UPLOAD_ERROR, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, FileActionType, FileUploadFailureResponse, FileUploadSuccessResponse } from "../types/fileActionTypes";
import axios from "axios";

const fileUploadRequest =  (): FileActionType => {
  return {
    type: FILE_UPLOAD_REQUEST
  }
} 

const fileUploadSuccess = (fileUploadSuccess: FileUploadSuccessResponse) : FileActionType => {
  return {
    type: FILE_UPLOAD_SUCCESS,
    payload: fileUploadSuccess
  }
}

const fileUploaderror = (fileUploadError: FileUploadFailureResponse) : FileActionType => {
  return {
    type: FILE_UPLOAD_ERROR,
    payload: fileUploadError
  }
}


export const fileUploadToGCS = (file: File) => {
  return (dispatch: Dispatch): Promise<any> => {
    dispatch(fileUploadRequest());
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      dispatch(fileUploadSuccess(response.data));
      return Promise.resolve(response.data); // Ensure a Promise is returned
    })
    .catch(error => {
      dispatch(fileUploaderror(error));
      return Promise.reject(error); // Propagate the error as a rejected Promise
    });
  };
};
