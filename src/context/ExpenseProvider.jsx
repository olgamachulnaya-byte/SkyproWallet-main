import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  deleteExpense,
  fetchExpenses,
  patchExpense,
  postExpense,
} from "../services/api";
import { textErrors } from "../const";
import { AuthContext } from "./AuthContext";
import { ExpenseContext } from "./ExpenseContext";

export const ExpenseProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getExpenses = useCallback(async () => {
    if (!token) {
      setExpenses([]);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const data = await fetchExpenses({ token });
      setExpenses(data);
    } catch (requestError) {
      const message = requestError.message || textErrors.getExpenseError;
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const addNewExpense = async ({ expense }) => {
  try {
    await postExpense({ token, expense });

    await getExpenses();

    toast.success("Новый расход добавлен");
  } catch (requestError) {
    const message = requestError.message || textErrors.addExpenseError;
    setError(message);
    toast.error(message);
    throw requestError;
  }
};

 const editExpense = async ({ id, expense }) => {
  try {
    await patchExpense({ token, id, expense });

    await getExpenses();

    toast.success("Расход обновлён");
  } catch (requestError) {
    const message = requestError.message || textErrors.updateExpenseError;
    setError(message);
    toast.error(message);
    throw requestError;
  }
};

const deleteExpenseByID = async ({ id }) => {
  try {
    await deleteExpense({ token, id });

    await getExpenses();

    toast.success("Расход удалён");
  } catch (requestError) {
    const message = requestError.message || textErrors.deleteExpenseError;
    setError(message);
    toast.error(message);
    throw requestError;
  }
};

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        isLoading,
        error,
        getExpenses,
        addNewExpense,
        editExpense,
        deleteExpenseByID,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
