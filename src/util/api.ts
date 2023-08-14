import { authType } from "./../types/authTypes";
import axios, { isAxiosError } from "axios";
import { getLocalStorage } from "./storage";

const errorResonse = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response;
  }
};

export const signupUser = async (userData: authType) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/signup`,
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
      `${process.env.REACT_APP_API_URL}auth/signin`,
      userData
    );
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};

export const getTodoList = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}todos`, {
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
    const response = await axios.post(`${process.env.REACT_APP_API_URL}todos`, {
      headers: { Authorization: `Bearer ${getLocalStorage("access_token")}` },
    });
    return response;
  } catch (error) {
    return errorResonse(error);
  }
};
