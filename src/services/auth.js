import axios from "axios";
import { API_URL, RoutesApp, textErrors } from "../const";

const getAuthErrorMessage = (error) => {
  return (
    error.response?.data?.error ||
    error.response?.data?.message ||
    error.message ||
    textErrors.signInAndSignUpError
  );
};

const requestConfig = {
  headers: {
    "Content-Type": "",
  },
};

export async function signIn(userData) {
  try {
    const response = await axios.post(
      `${API_URL}${RoutesApp.LOGIN}`,
      userData,
      requestConfig
    );

    return response.data.user;
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(
      API_URL,
      { login, name, password },
      requestConfig
    );

    return response.data.user;
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}
