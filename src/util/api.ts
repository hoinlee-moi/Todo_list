import { authType } from "./../types/authTypes";
import axios, { isAxiosError } from "axios";

export const signupUser = async (userData: authType) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/signup`,
      userData
    );
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response
    }
  }
};
