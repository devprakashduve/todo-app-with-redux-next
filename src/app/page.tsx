"use client";
import styles from "./page.module.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import store from "./stateManager/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Redux Todo App</h1>
          <hr></hr>
          <AddTodoForm />
          <TodoList />
        </main>
      </div>
    </Provider>
  );
}
