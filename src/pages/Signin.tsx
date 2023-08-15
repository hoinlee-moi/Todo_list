import { useEffect } from "react";
import { useNavigate } from "react-router";

import styles from "../styles/auth/AuthPage.module.css";
import AuthSection from "../components/auth/AuthSection";
import { getLocalStorage } from "../util/storage";

const Signin = () => {
  const navigation = useNavigate()

  useEffect(()=>{
    if(getLocalStorage('access_token')) navigation('/todo')
  },[])
  return (
    <div className={styles.atuhContainer}>
      <h1>로그인</h1>
      <AuthSection page="signin" />
    </div>
  );
};

export default Signin;
