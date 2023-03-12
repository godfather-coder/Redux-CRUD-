import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from '../fakedata'

export const userSlice = createSlice({
  name:"users",
  initialState:{value:UsersData},
  reducers:{
    addUser:(state,action)=>{
        state.value.push(action.payload)
    },
    editUsername:(state,action)=>{
      state.value.map((e) => {
        
          if(e.id === action.payload.id){
            e.username = action.payload.username
          }
        
      })
    },
    deleteUser:(state,action)=>{
      state.value= state.value.filter((e) => e.id !== action.payload.id)
    }
  }
})



export const {addUser,deleteUser,editUsername}= userSlice.actions
export default userSlice.reducer;