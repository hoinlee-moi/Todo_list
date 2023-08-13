import styles from "../../styles/pages/todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
const TodoCreate = () => {
  return (
    <section className={styles.createTodoContainer}>
      <div className={styles.inputWrap}>
        <input type="text" />
        <button>
          <FontAwesomeIcon icon={faPencil} />
          작성하기
        </button>
      </div>
    </section>
  );
};

export default TodoCreate