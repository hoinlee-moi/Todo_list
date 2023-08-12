
import styles from "../styles/auth/AuthPage.module.css";
import AuthSection from "../components/auth/AuthSection";

const Signup = () => {
  return (
    <div className={styles.atuhContainer}>
      <h1>회원가입</h1>
      <AuthSection page="signup" />
    </div>
  );
};

export default Signup;
