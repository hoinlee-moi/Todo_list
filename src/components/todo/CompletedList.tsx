import { DUMMY } from "../../pages/Todo";
import styles from "../../styles/pages/todo.module.css";
import TodoItem from "./TodoItem";

const CompletedList = () => {
  const dummy = DUMMY;

  return (
    <article>
      <h3>완료</h3>
      <div className={styles.todoListWrap}>
        {dummy.map((item) => {
          return <TodoItem item={item} />;
        })}
      </div>
    </article>
  );
};

export default CompletedList;
