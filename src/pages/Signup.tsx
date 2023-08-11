import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import styles from "../styles/pages/signup.module.css";
import Button from "../components/ui/Button";
import SignupInput from "../components/signup/SignupInput";
import { authType } from "../types/authTypes";
import { validateEmail, validatePassword } from "../util/validation";
import { signupUser } from "../util/api";
import LoadingCircle from "../components/ui/LoadingCircle";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInputVal, setSignupInputVal] = useState<authType>({
    email: "",
    password: "",
  });
  const [signupInvalid, setSignInvalid] = useState<boolean>(true);
  const [signupLoading, setSignupLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 리다이렉트 함수
  const cancelBtnRedirectHandler = useCallback((): void => navigate("/"), []);
  const successSignupRedirect = useCallback(
    (): void => navigate("/signin"),
    []
  );
  //input 값 받기
  const signupInputChangeHandler = (target: string, value: string): void => {
    const newValue = newSignupValue(target, value);
    setSignupInputVal(newValue);
    validateValue(newValue);
  };
  //새 input값 return
  const newSignupValue = (target: string, value: string): authType => {
    return { ...signupInputVal, [target]: value };
  };
  // input state값 유효성 검사
  const validateValue = (value: authType): void => {
    if (validateEmail(value.email) && validatePassword(value.password))
      setSignInvalid(false);
    else setSignInvalid(true);
  };
  //회원가입 버튼
  const signupBtnHandler: () => Promise<void> = async () => {
    setSignupLoading(true);
    const result = await signupUser(signupInputVal);
    if (result?.status === 201) {
      successSignupRedirect();
      return;
    }
    if (result?.status === 400) setErrorMessage(result.data.message);
    setSignupLoading(false);
  };

  return (
    <div className={styles.signupContainer}>
      <section className={styles.signupSection}>
        <h1>회원가입</h1>
        <SignupInput inputChangeHandler={signupInputChangeHandler} />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {signupLoading ? (
          <LoadingCircle />
        ) : (
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
        )}
      </section>
    </div>
  );
};

export default Signup;
