import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState: {
    isDarkModeOn:true,
  },
  reducers: {
    handleDarkMode:(state,action)=>{
        state.isDarkModeOn=action.payload
    },
  },
});

export const {handleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;
