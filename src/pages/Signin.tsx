import styles from "../styles/pages/signin.module.css";
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
