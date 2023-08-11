import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "../styles/signup.module.css";
import Button from "../components/ui/Button";
import SignupInput from "../components/signup/SignupInput";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInputVal, setSignupInputVal] = useState({
    email: "",
    password: "",
  });
  const [signupInvalid, setSignInvalid] = useState(true);
  const [signupLoading, setSignupLoading] = useState(false)

  const signupInputChangeHandler = () => {};

  const cancelBtnRedirectHandler = () => navigate("/");
  const signupBtnHandler = () => {
    console.log("클릭");
  };

  return (
    <div className={styles.signupContainer}>
      <section className={styles.signupSection}>
        <h1>회원가입</h1>
        <SignupInput inputChangeHandler={signupInputChangeHandler} />
        <article className={styles.buttonWrapper}>
          <Button
            className={signupInvalid ? "" : styles.validBtn}
            disabled={signupInvalid}
            clickHandler={signupBtnHandler}
            data-testid="signup-button"
          >
            회원가입
          </Button>
          <Button clickHandler={cancelBtnRedirectHandler}>취소</Button>
        </article>
      </section>
    </div>
  );
};

export default Signup;
