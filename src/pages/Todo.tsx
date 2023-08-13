import CompletedList from "../components/todo/CompletedList";
import IncompletedList from "../components/todo/IncompletedList";
import TodoCreate from "../components/todo/TodoCreate";
import styles from "../styles/pages/todo.module.css";

const Todo = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.todoContainer}>
        <h1 className={styles.pageTitle}>TODO</h1>
        <TodoCreate />
        <section className={styles.listContainer}>
          <CompletedList />
          <IncompletedList />
        </section>
      </div>
    </div>
  );
};

export default Todo;
