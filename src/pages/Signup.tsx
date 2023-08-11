import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { isAxiosError } from "axios";

import styles from "../styles/signup.module.css";
import Button from "../components/ui/Button";
import SignupInput from "../components/signup/SignupInput";
import { authType } from "../types/authTypes";
import { validateEmail, validatePassword } from "../util/validation";
import { signupUser } from "../util/api";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInputVal, setSignupInputVal] = useState<authType>({
    email: "",
    password: "",
  });
  const [signupInvalid, setSignInvalid] = useState<boolean>(true);
  const [signupLoading, setSignupLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const cancelBtnRedirectHandler = useCallback((): void => navigate("/"), []);
  const successSignupRedirect = useCallback(
    (): void => navigate("/signin"),
    []
  );

  const signupInputChangeHandler = (target: string, value: string): void => {
    const newValue = newSignupValue(target, value);
    setSignupInputVal(newValue);
    validateValue(newValue);
  };

  const newSignupValue = (target: string, value: string): authType => {
    return { ...signupInputVal, [target]: value };
  };

  const validateValue = (value: authType): void => {
    if (validateEmail(value.email) && validatePassword(value.password))
      setSignInvalid(false);
    else setSignInvalid(true);
  };

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
        {errorMessage&&<p className={styles.errorMessage}>{errorMessage}</p>}
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
