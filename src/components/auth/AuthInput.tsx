import React from "react";
import styles from "../../styles/auth/AuthPage.module.css";
import Input from "../ui/Input";
import { debounceFunction } from "../../util/debounceUtil";

interface SignupInputProps {
  inputChangeHandler: (target: string, value: string) => void;
}

const AuthInput = ({ inputChangeHandler }: SignupInputProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    inputChangeHandler(e.target.id, e.target.value);
  };
  const debounceChangeHandler = debounceFunction<
    React.ChangeEvent<HTMLInputElement>
  >(changeHandler, 200);
  return (
    <article className={styles.inputWrapper}>
      <Input
        id="email"
        type="text"
        placeholder="e-mail"
        dataTestId="email-input"
        onChangeHandler={debounceChangeHandler}
      />
      <Input
        id="password"
        type="password"
        placeholder="password(8자이상)"
        dataTestId="password-input"
        onChangeHandler={debounceChangeHandler}
      />
    </article>
  );
};

export default AuthInput;
