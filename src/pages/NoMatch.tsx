import { useNavigate } from "react-router";
import Button from "../components/ui/Button";
import styles from "../styles/pages/noMatch.module.css";
const NoMatch = () => {
  const navigation = useNavigate();

  const redirectClickHandler = () => navigation("/");
  return (
    <div className={styles.pageContainer}>
      <h1>404 not found</h1>
      <p>올바른 경로로 접속해주세요!</p>
      <Button clickHandler={redirectClickHandler}>홈으로 돌아가기</Button>
    </div>
  );
};

export default NoMatch;
