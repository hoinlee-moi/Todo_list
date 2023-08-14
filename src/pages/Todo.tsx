import styles from "../styles/pages/todo.module.css";

import TodoContextProvider from "../contexts/TodoContext";
import CompletedList from "../components/todo/CompletedList";
import IncompletedList from "../components/todo/IncompletedList";
import TodoCreate from "../components/todo/TodoCreate";

const Todo = () => {
  return (
    <TodoContextProvider>
      <div className={styles.pageContainer}>
        <div className={styles.todoContainer}>
          <h1 className={styles.pageTitle}>TODO</h1>
          <TodoCreate />
          <section className={styles.listContainer}>
            <IncompletedList />
            <CompletedList />
          </section>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default Todo;
