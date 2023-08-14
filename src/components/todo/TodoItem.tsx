import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/pages/todo.module.css";
import { Todo } from "../../types/todoTypes";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import TodoEditBtnSection from "./TodoEditBtnSection";
import Input from "../ui/Input";
import { useContext, useRef, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const editInputRef = useRef<HTMLInputElement>(null);
  const { onUpdateTodo, onDeleteTodo, onCompletedTodo } =
    useContext(TodoContext);
  const [editModeState, setEditModeState] = useState<boolean>(false);

  const todoUpdateHandler = () => {
    if (editInputRef?.current?.value)
      onUpdateTodo(item.id, editInputRef.current.value);
  };
  const todoDeleteHandler = () => onDeleteTodo(item.id);
  const todoCheckedChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (item.isCompleted !== e.target.checked) {
      onCompletedTodo(item.id, e.target.checked);
    }
  };
  return (
    <li id={item.id.toString()} className={styles.todoItem}>
      {editModeState ? (
        <Input
          type="text"
          defaultValue={item.todo}
          className={styles.editTodoInput}
          myRef={editInputRef}
        />
      ) : (
        <label>
          <Input
            type="checkbox"
            defaultChecked={item.isCompleted}
            onChangeHandler={todoCheckedChangeHandler}
          />
          <span className={styles.todoCustomCheck}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={styles.todoContent}>{item.todo}</span>
        </label>
      )}
      <TodoEditBtnSection
        editModeChange={setEditModeState}
        editModeState={editModeState}
        updateClickHandler={todoUpdateHandler}
        deleteCLickHandler={todoDeleteHandler}
      />
    </li>
  );
};

export default TodoItem;
