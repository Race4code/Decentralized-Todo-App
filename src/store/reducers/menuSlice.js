import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState: {
    selected:0,
    isHovered:0,
  },
  reducers: {
    setSelected:(state,action)=>{
        const temp = {...state}
        temp.selected=action.payload
        return temp
    },
    setIsHovered:(state,action)=>{
        const temp = {...state}
        temp.isHovered=action.payload
        return temp
    },
  },
});

export const {setIsHovered,setSelected} = menuSlice.actions;
export default menuSlice.reducer;
