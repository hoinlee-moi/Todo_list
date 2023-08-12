import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import styles from "../styles/pages/signup.module.css";
import Button from "../components/ui/Button";
import SignupInput from "../components/auth/AuthInput";
import { authType } from "../types/authTypes";
import { validateEmail, validatePassword } from "../util/validation";
import { signupUser } from "../util/api";
import LoadingCircle from "../components/ui/LoadingCircle";
import AuthSection from "../components/auth/AuthSection";

const Signup = () => {
  return (
    <div className={styles.atuhContainer}>
      <AuthSection page="signup" />
    </div>
  );
};

export default Signup;
