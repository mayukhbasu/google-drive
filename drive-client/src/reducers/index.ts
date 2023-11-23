import { combineReducers } from 'redux';
import  userReducer from './userReducer';
import { logoutReducer } from './logoutReducer';
import fileUploadReducer from './fileReducer';

const rootReducer = combineReducers({ 
  user: userReducer,
 logout: logoutReducer,
 fileUpload: fileUploadReducer
  // Other reducers would be added here
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
