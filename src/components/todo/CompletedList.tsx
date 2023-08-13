import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DUMMY } from "../../pages/Todo";
import styles from "../../styles/pages/todo.module.css";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const dummy = DUMMY;
const CompletedList = () => {
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
                <FontAwesomeIcon icon={faSquareCheck} />
                <input type="checkbox" defaultChecked={item.isCompleted} />
                <span>{item.todo}</span>
              </label>
            </li>
          );
        })}
      </div>
    </article>
  );
};

export default CompletedList;
