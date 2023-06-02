import { createSlice } from '@reduxjs/toolkit';

const editSlice = createSlice({
  name: 'edit',
  initialState:{
    editTodo:{},
    todoListIndex:null,
    todoIndex:null,
    todoId:null
  },
  reducers: {

    loadEditBox:(state,action)=>{return state=action.payload},
    unLoadEditBox:(state,action)=>{return {editTodo:{},todoListIndex:null,todoIndex:null,todoId:null}}
  },
});

export const { loadEditBox,unLoadEditBox } = editSlice.actions;
export default editSlice.reducer;
