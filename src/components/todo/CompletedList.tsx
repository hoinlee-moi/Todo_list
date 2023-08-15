import { useContext } from "react";
import styles from "../../styles/pages/todo.module.css";
import { Todo } from "../../types/todoTypes";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../contexts/TodoContext";

const CompletedList = ({}) => {
  const { todoList } = useContext(TodoContext);
  const completedList = todoList.filter((item) => item.isCompleted);
  const renderTodoItem = (item: Todo) => {
    return <TodoItem item={item} key={item.id} />;
  };
  return (
    <article>
      <h3>완료</h3>
      <div className={styles.todoListWrap}>
        {completedList.map(renderTodoItem)}
      </div>
    </article>
  );
};

export default CompletedList;
