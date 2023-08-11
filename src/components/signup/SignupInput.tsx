import styles from "../../styles/signup.module.css";
import Input from "../ui/Input";

interface SignupInputProps{
    inputChangeHandler : ()=>void
}

const SignupInput = ({inputChangeHandler}:SignupInputProps) => {
  return (
    <article className={styles.inputWrapper}>
      <Input
        id="signupEmail"
        type="text"
        placeholder="e-mail"
        data-testid="email-input"
        onChangeHandler={inputChangeHandler}
      />
      <Input
        id="signupPassword"
        type="password"
        placeholder="password"
        data-testid="password-input"
        onChangeHandler={inputChangeHandler}
      />
    </article>
  );
};

export default SignupInput