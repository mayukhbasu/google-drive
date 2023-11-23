export const FILE_UPLOAD_REQUEST = 'FILE_UPLOAD_REQUEST';
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_ERROR = 'FILE_UPLOAD_ERROR';


export interface FileUploadResponse {
  loading: boolean;
  successResponse: FileUploadSuccessResponse | null;
  errorResponse: FileUploadFailureResponse | null;
}

export interface FileUploadSuccessResponse {
  message: string;
}

export interface FileUploadFailureResponse {
  error: string;
}

interface FileUploadRequest {
  type: typeof FILE_UPLOAD_REQUEST;
}

interface FileUploadSuccess {
  type: typeof FILE_UPLOAD_SUCCESS;
  payload: FileUploadSuccessResponse
}

interface FileUploadFailure {
  type: typeof FILE_UPLOAD_ERROR;
  payload: FileUploadFailureResponse
}

export type FileActionType = FileUploadRequest | FileUploadSuccess | FileUploadFailure