import TodoCreate from "../components/todo/TodoCreate";
import styles from "../styles/pages/todo.module.css";

const Todo = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.todoContainer}>
        <h1 className={styles.pageTitle}>TODO</h1>
        <TodoCreate />
        <section className={styles.listContainer}>
          <article>
            <h3>계획표</h3>
            <div className={styles.todoListWrap}></div>
          </article>
          <article>
            <h3>완료!</h3>
            <div className={styles.todoListWrap}></div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Todo;
