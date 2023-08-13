import styles from "../../styles/pages/todo.module.css";

const CompletedList = () => {
  return (
    <article>
      <h3>완료!</h3>
      <div className={styles.todoListWrap}></div>
    </article>
  );
};

export default CompletedList;
