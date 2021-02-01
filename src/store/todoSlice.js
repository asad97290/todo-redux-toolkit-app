import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
  name:"TodoSlice",
  
  initialState : {
  todos :[],
},
  
  reducers:{
    addTodo:(state,action)=> {
      state.todos.push({message :action.payload,id:uuidv4(),isCompleted:false})
    },
    deleteTodo:(state,action)=> {
      state.todos  = state.todos.filter((todo)=>{
        return todo.id !== action.payload
      })
    },
    toggleComplete:(state,action)=> {
      state.todos.map((todo) =>{
        if(todo.id === action.payload){ 
        return todo.isCompleted = true
        }
      })
    }
  }
})

export const todoReducer = todoSlice.reducer
export const {addTodo,deleteTodo,toggleComplete} = todoSlice.actions;
