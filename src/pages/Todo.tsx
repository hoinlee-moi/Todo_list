import { useEffect } from "react";
import { useNavigate } from "react-router";

import styles from "../styles/pages/todo.module.css";
import TodoContextProvider from "../contexts/TodoContext";
import CompletedList from "../components/todo/CompletedList";
import IncompletedList from "../components/todo/IncompletedList";
import TodoCreate from "../components/todo/TodoCreate";
import { deleteLocalStorage, getLocalStorage } from "../util/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const navigation = useNavigate();
  useEffect(() => {
    if (!getLocalStorage("access_token")) navigation("/signin");
  }, []);
  const logoutClickHandler = () => {
    deleteLocalStorage("access_token")
    navigation("/")
  };
  return (
    <TodoContextProvider>
      <div className={styles.pageContainer}>
        <div className={styles.todoContainer}>
          <span className={styles.logoutIcon} onClick={logoutClickHandler}>
            <FontAwesomeIcon icon={faDoorOpen} />
            로그아웃
          </span>
          <h1 className={styles.pageTitle}>TODO</h1>
          <TodoCreate />
          <section className={styles.listContainer}>
            <IncompletedList />
            <CompletedList />
          </section>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default Todo;
