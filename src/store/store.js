const {configureStore} = require("@reduxjs/toolkit")
const {todoReducer} = require('./todoSlice')

export const store = configureStore({
    reducer:{
        todoReducer
    }
})