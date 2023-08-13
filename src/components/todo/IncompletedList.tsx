import styles from "../../styles/pages/todo.module.css";

const IncompletedList = () => {
  return (
    <article>
      <h3>계획표</h3>
      <div className={styles.todoListWrap}></div>
    </article>
  );
};

export default IncompletedList;
