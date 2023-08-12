import { useCallback, useState } from "react";
import styles from "../../styles/auth/AuthSection.module.css";
import { useNavigate } from "react-router-dom";
import LoadingCircle from "../ui/LoadingCircle";
import AuthInput from "./AuthInput";
import Button from "../ui/Button";
import { authType } from "../../types/authTypes";
import { validateEmail, validatePassword } from "../../util/validation";
import { signupUser } from "../../util/api";

interface AuthSectionProps {
  page: string;
}

const AuthSection = ({ page }: AuthSectionProps) => {
  const navigate = useNavigate();
  const [authInputVal, setAuthInputVal] = useState<authType>({
    email: "",
    password: "",
  });
  const [authInvalid, setAuthInvalid] = useState<boolean>(true);
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 리다이렉트 함수
  const cancelBtnRedirectHandler = useCallback((): void => navigate("/"), []);
  const successSignupRedirect = useCallback(
    (): void => navigate("/signin"),
    []
  );
  const successSigninRedirect = useCallback((): void => navigate("/todo"), []);

  //input 값 받기
  const authInputChangeHandler = (target: string, value: string): void => {
    const newValue = newSignupValue(target, value);
    setAuthInputVal(newValue);
    validateValue(newValue);
  };
  //새 input값 return
  const newSignupValue = (target: string, value: string): authType => {
    return { ...authInputVal, [target]: value };
  };
  // input state값 유효성 검사
  const validateValue = (value: authType): void => {
    if (validateEmail(value.email) && validatePassword(value.password))
      setAuthInvalid(false);
    else setAuthInvalid(true);
  };
  //회원가입 버튼
  const signupBtnHandler: () => Promise<void> = async () => {
    setAuthLoading(true);
    const result = await signupUser(authInputVal);
    if (result?.status === 201) {
      successSignupRedirect();
      return;
    }
    if (result?.status === 400) setErrorMessage(result.data.message);
    setAuthLoading(false);
  };
  const signinBtnHandler = () => {};

  return (
    <section className={styles.atuhSection}>
      <AuthInput inputChangeHandler={authInputChangeHandler} />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {authLoading ? (
        <LoadingCircle />
      ) : (
        <article className={styles.buttonWrapper}>
          {page === "singup" ? (
            <Button
              className={authInvalid ? "" : styles.validBtn}
              disabled={authInvalid}
              clickHandler={signupBtnHandler}
              dataTestId="signup-button"
            >
              회원가입
            </Button>
          ) : (
            <Button
              className={authInvalid ? "" : styles.validBtn}
              disabled={authInvalid}
              clickHandler={signinBtnHandler}
              dataTestId="signin-button"
            >
              로그인
            </Button>
          )}

          <Button clickHandler={cancelBtnRedirectHandler}>취소</Button>
        </article>
      )}
    </section>
  );
};

export default AuthSection;
