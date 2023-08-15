import { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../components/ui/Button";
import styles from "../styles/pages/home.module.css";
import { getLocalStorage } from "../util/storage";

const Home = () => {
  const navigation = useNavigate();
  useEffect(() => {
    if (getLocalStorage("access_token")) navigation("/todo");
  }, []);
  const signinBtnRedirectHandle = () => navigation("signin");
  const signupBtnRedirectHandle = () => navigation("signup");
  return (
    <div className={styles.homeContainer}>
      <section className={styles.titleContainer}>
        <h1>TODOLIST에 오신 걸 환영합니다!</h1>
      </section>
      <section className={styles.redirectBtnContainer}>
        <Button clickHandler={signinBtnRedirectHandle}>로그인</Button>
        <Button clickHandler={signupBtnRedirectHandle}>회원가입</Button>
      </section>
    </div>
  );
};

export default Home;
