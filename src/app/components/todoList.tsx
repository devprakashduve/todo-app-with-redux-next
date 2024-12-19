"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo: any) => (
        <li key={todo.id} className="todo-list-item">
          <span>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
