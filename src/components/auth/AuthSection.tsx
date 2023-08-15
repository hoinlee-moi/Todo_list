import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

import styles from "../../styles/auth/AuthPage.module.css";

import LoadingCircle from "../ui/LoadingCircle";
import AuthInput from "./AuthInput";
import Button from "../ui/Button";
import { authType } from "../../types/authTypes";
import { validateEmail, validatePassword } from "../../util/validation";
import { signinUser, signupUser } from "../../util/api";
import { setLocalStorage } from "../../util/storage";

interface AuthSectionProps {
  page: string;
}
type AuthApiFunction = () => Promise<void>;

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

  //응답 에러 메세지
  const errorResponseMessage = (
    response: AxiosResponse<any, any> | undefined
  ) => {
    if (response?.status === 400 || response?.status === 404) {
      setErrorMessage(response.data.message);
      return;
    }
    setErrorMessage("정보를 다시 확인해주세요");
  };
  //회원가입 버튼
  const signupBtnHandler: AuthApiFunction = async () => {
    setAuthLoading(true);
    const result = await signupUser(authInputVal);
    if (result?.status === 201) {
      successSignupRedirect();
      return;
    }
    errorResponseMessage(result);
    setAuthLoading(false);
  };
  //로그인 버튼
  const signinBtnHandler: AuthApiFunction = async () => {
    setAuthLoading(true);
    const result = await signinUser(authInputVal);
    if (result?.status === 200) {
      setLocalStorage("access_token", result.data.access_token);
      successSigninRedirect();
      return;
    }
    errorResponseMessage(result);
    setAuthLoading(false);
  };

  return (
    <section className={styles.atuhSection}>
      <AuthInput inputChangeHandler={authInputChangeHandler} />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {authLoading ? (
        <LoadingCircle />
      ) : (
        <article className={styles.buttonWrapper}>
          {page === "signup" ? (
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
