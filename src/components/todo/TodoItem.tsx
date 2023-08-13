import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/pages/todo.module.css";
import { Todo } from "../../types/todoTypes";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <li key={item.id} id={item.id.toString()} className={styles.todoItem}>
      <label>
        <input type="checkbox" defaultChecked={item.isCompleted} />
        <span className={styles.todoCustomCheck}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={styles.todoContent}>{item.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
