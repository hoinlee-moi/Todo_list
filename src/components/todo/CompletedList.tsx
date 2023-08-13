import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DUMMY } from "../../pages/Todo";
import styles from "../../styles/pages/todo.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const CompletedList = () => {
  const dummy = DUMMY;
  return (
    <article>
      <h3>완료</h3>
      <div className={styles.todoListWrap}>
        {dummy.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id.toString()}
              className={styles.todoItem}
            >
              <label>
                <input type="checkbox" defaultChecked={item.isCompleted} />
                <span className={styles.todoCustomCheck}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={styles.todoContent}>{item.todo}</span>
              </label>
            </li>
          );
        })}
      </div>
    </article>
  );
};

export default CompletedList;
