import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/reduxExample/logic'
export default configureStore({
  reducer: {
    counter: counterReducer,
    // counter1:counterReducer1,
  },
  
});
