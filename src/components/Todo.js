import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
} from "../store/todoSlice";
import "bootstrap/dist/css/bootstrap.css";

export default function Todo() {
  
  const [newTodo, setNewTodos] = useState([]);
  const [status, setStatus] = useState("all");
  
  const todos = useSelector((state) => {
    console.log(state.todoReducer.todos);
    return state.todoReducer.todos;
  });

  const dispatch = useDispatch();

  function filterTodo() {
    switch (status) {
      case "completed":
        setNewTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "active":
        setNewTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setNewTodos(todos);
        break;
    }
  }
  useEffect(()=>{
filterTodo()
  },[todos,status])

  return (
    <div className="container">
      <div className="">
        <input type="text" id="todo" />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (document.getElementById("todo").value === "") {
              alert("you can't add empty task");
              return;
            }

            dispatch(addTodo(document.getElementById("todo").value));
          }}
        >
          add todo
        </button>
        <label>filter</label>

        <select onChange={(e) =>setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>
      {todos.length === 0 ? (
        <></>
      ) : (
        newTodo.map((todo) => (
          <div className="d-flex " key={todo.id}>
            <h1
              className="pl-2"
              style={{
                textDecoration:
                  todo.isCompleted === true ? "line-through" : "none",
              }}
              onClick={() => dispatch(toggleComplete(todo.id))}
            >
              {todo.message}
            </h1>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              x
            </button>
          </div>
        ))
      )}

      
    </div>
  );
}
