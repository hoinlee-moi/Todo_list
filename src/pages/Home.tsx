import { useNavigate } from "react-router";
import Button from "../components/ui/Button";
import styles from "../styles/home.module.css";

const Home = () => {
  const navigation = useNavigate();
  const signinBtnRedirectHandle = () => navigation("signin");
  const signupBtnRedirectHandle = () => navigation("signup");
  return (
    <div className={styles.homeContainer}>
      <section className={styles.titleContainer}>
        <h1>TODOLIST에 오신 걸 환영합니다!</h1>
      </section>
      <section className={styles.redirectBtnContainer}>
        <Button clickHandle={signinBtnRedirectHandle}>로그인</Button>
        <Button clickHandle={signupBtnRedirectHandle}>회원가입</Button>
      </section>
    </div>
  );
};

export default Home!;
