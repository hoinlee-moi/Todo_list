import CompletedList from "../components/todo/CompletedList";
import IncompletedList from "../components/todo/IncompletedList";
import TodoCreate from "../components/todo/TodoCreate";
import styles from "../styles/pages/todo.module.css";
export const DUMMY = [
  {
    "id": 1,
    "todo": "todo2",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 2,
    "todo": "todo3",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 3,
    "todo": "todo4",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 4,
    "todo": "todo5",
    "isCompleted": true,
    "userId": 1
  }
]
const Todo = () => {
  return (
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
  );
};

export default Todo;
