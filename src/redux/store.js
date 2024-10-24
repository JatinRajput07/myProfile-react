import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import projectReducer from './productSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer

  },
});

export default store;
