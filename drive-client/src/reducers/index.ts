import { combineReducers } from 'redux';
import  userReducer from './userReducer';
import { logoutReducer } from './logoutReducer';

const rootReducer = combineReducers({ 
  user: userReducer,
 logout: logoutReducer
  // Other reducers would be added here
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
