import { createContext } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  isLoading: false,
  error: "",
  getExpenses: async () => {},
  addNewExpense: async () => {},
  editExpense: async () => {},
  deleteExpenseByID: async () => {},
});
