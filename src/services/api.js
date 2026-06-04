import axios from "axios";
import { API_URL_NEW, textErrors } from "../const";

const getApiErrorMessage = (error, fallbackMessage) => {
  return (
    error.response?.data?.error ||
    error.response?.data?.message ||
    error.message ||
    fallbackMessage
  );
};

const getAuthHeaders = (token) => {
  if (!token) {
    throw new Error("Не найден токен авторизации. Войдите в аккаунт заново.");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

const getMutationHeaders = (token) => ({
  ...getAuthHeaders(token),
  "Content-Type": "",
});

export async function fetchExpenses({ token }) {
  try {
    const response = await axios.get(API_URL_NEW, {
      headers: getAuthHeaders(token),
    });

    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    throw new Error(getApiErrorMessage(error, textErrors.getExpenseError));
  }
}

export async function postExpense({ token, expense }) {
  try {
    const response = await axios.post(API_URL_NEW, expense, {
      headers: getMutationHeaders(token),
    });

    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, textErrors.addExpenseError));
  }
}

export async function patchExpense({ token, id, expense }) {
  if (!id) {
    throw new Error("Не найден ID расхода");
  }

  try {
    const response = await axios.patch(`${API_URL_NEW}/${id}`, expense, {
      headers: getMutationHeaders(token),
    });

    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, textErrors.updateExpenseError));
  }
}

export async function deleteExpense({ token, id }) {
  if (!id) {
    throw new Error("Не найден ID расхода");
  }

  try {
    const response = await axios.delete(`${API_URL_NEW}/${id}`, {
      headers: getAuthHeaders(token),
    });

    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, textErrors.deleteExpenseError));
  }
}
