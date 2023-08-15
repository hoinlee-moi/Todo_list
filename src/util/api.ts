import { authType } from "./../types/authTypes";
import axios, { isAxiosError } from "axios";
import { getLocalStorage } from "./storage";
import { Todo } from "../types/todoTypes";

const errorResonse = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response;
  }
};

export const signupUser = async (userData: authType) => {
  try {
    const response = await axios.post(
      "https://www.pre-onboarding-selection-task.shop/auth/signup",
      userData
    );
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};
export const signinUser = async (userData: authType) => {
  try {
    const response = await axios.post(
      "https://www.pre-onboarding-selection-task.shop/auth/signin",
      userData
    );
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};

export const getTodoList = async () => {
  try {
    const response = await axios.get("https://www.pre-onboarding-selection-task.shop/todos", {
      headers: {
        Authorization: `Bearer ${getLocalStorage("access_token")}`,
      },
    });
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};

export const createTodo = async (todo: string) => {
  try {
    const response = await axios.post(
      "https://www.pre-onboarding-selection-task.shop/todos",
      { todo: todo },
      {
        headers: {
          Authorization: `Bearer ${getLocalStorage("access_token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};

export const updateTodo = async (todoItem: Todo) => {
  try {
    const response = await axios.put(
      `https://www.pre-onboarding-selection-task.shop/todos/${todoItem.id}`,
      { todo: todoItem.todo, isCompleted: todoItem.isCompleted },
      {
        headers: { Authorization: `Bearer ${getLocalStorage("access_token")}` },
      }
    );
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};

export const deleteTodo = (id: number) => {
  try {
    const response = axios.delete(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      {
        headers: { Authorization: `Bearer ${getLocalStorage("access_token")}` },
      }
    );
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};
