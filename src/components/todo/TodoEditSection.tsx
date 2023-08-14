import styles from "../../styles/pages/todo.module.css"

const TodoEditSection = () => {
  return (
    <div className={styles.todoEditBtnContainer}>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
};

export default TodoEditSection;
