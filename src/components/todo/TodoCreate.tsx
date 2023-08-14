import styles from "../../styles/pages/todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { TodoContext } from "../../contexts/TodoContext";
const TodoCreate = () => {
  const { onCreateTodo } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const createBtnClickHandler = async () => {
    if (inputRef?.current?.value) {
      await onCreateTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <section className={styles.createTodoContainer}>
      <div className={styles.inputWrap}>
        <Input
          type="text"
          placeholder="할 일을 입력해주세요"
          myRef={inputRef}
        />
        <label>
          <FontAwesomeIcon icon={faPencil} />
          <Button clickHandler={createBtnClickHandler}>작성하기</Button>
        </label>
      </div>
    </section>
  );
};

export default TodoCreate;
