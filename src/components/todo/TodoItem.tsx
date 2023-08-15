import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/pages/todo.module.css";
import { Todo } from "../../types/todoTypes";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import TodoEditBtnSection from "./TodoEditBtnSection";
import Input from "../ui/Input";
import { useContext, useRef, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { enterKeyEvent } from "../../util/enterKeyEvent";

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const editInputRef = useRef<HTMLInputElement>(null);
  const { onUpdateTodo, onDeleteTodo, onCompletedTodo } =
    useContext(TodoContext);
  const [editModeState, setEditModeState] = useState<boolean>(false);
  // 투두 업데이트
  const todoUpdateHandler = async () => {
    if (editInputRef?.current?.value) {
      await onUpdateTodo({ ...item, ["todo"]: editInputRef.current.value });
      setEditModeState(false);
    }
  };
  // 삭제 버튼
  const todoDeleteHandler = async () => await onDeleteTodo(item.id);

  // 체크상태 업데이트
  const todoCheckedChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (item.isCompleted !== e.target.checked) {
      await onCompletedTodo({ ...item, ["isCompleted"]: e.target.checked });
    }
  };

  const updateEnterKeyHandler = (e: React.KeyboardEvent) =>
    enterKeyEvent(e, todoUpdateHandler);

  return (
    <li id={item.id.toString()} className={styles.todoItem}>
      {editModeState ? (
        <Input
          type="text"
          defaultValue={item.todo}
          className={styles.editTodoInput}
          myRef={editInputRef}
          onKeyDownHandler={updateEnterKeyHandler}
          dataTestId="modify-input"
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
