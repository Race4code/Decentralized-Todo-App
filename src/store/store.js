import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './reducers/todoSlice';
import editSlice from './reducers/editSlice';
import menuSlice from './reducers/menuSlice';
import darkModeSlice from './reducers/darkModeSlice';

const store = configureStore({
  reducer: {
    todoSlice,
    editSlice,
    menuSlice,
    darkModeSlice
  }
  // Other store configuration options (if any)
});

export default store;