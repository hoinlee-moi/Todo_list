import styles from "../styles/auth/AuthPage.module.css";
import AuthSection from "../components/auth/AuthSection";

const Signin = () => {
  return (
    <div className={styles.atuhContainer}>
      <h1>로그인</h1>
      <AuthSection page="signin" />
    </div>
  );
};

export default Signin;
