import styles from "../../styles/pages/todo.module.css";
import Button from "../ui/Button";

interface TodoEditBtnSectionProps {
  editModeChange: React.Dispatch<React.SetStateAction<boolean>>;
  editModeState: boolean;
  updateClickHandler: () => void;
  deleteCLickHandler: () => void;
}

const TodoEditBtnSection = ({
  editModeChange,
  editModeState,
  updateClickHandler,
  deleteCLickHandler,
}: TodoEditBtnSectionProps) => {
  const editModeOpenHandler = () => editModeChange(true);
  const editModeCancelHandler = () => editModeChange(false);

  return (
    <div className={styles.todoEditBtnContainer}>
      {editModeState ? (
        <>
          <Button clickHandler={updateClickHandler}>제출</Button>
          <Button clickHandler={editModeCancelHandler}>취소</Button>
        </>
      ) : (
        <>
          <Button clickHandler={editModeOpenHandler}>수정</Button>
          <Button clickHandler={deleteCLickHandler}>삭제</Button>
        </>
      )}
    </div>
  );
};

export default TodoEditBtnSection;
