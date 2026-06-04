import { toast } from "react-toastify";

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

function isRealDate(value) {
  if (!dateRegex.test(value)) return false;

  const [day, month, year] = value.split(".").map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export const validateExpenseErrors = (values) => {
  const errors = {};
  let isValid = true;

  if (values.name.trim().length < 4) {
    errors.name = true;
    toast.error("Описание расхода должно быть не менее 4 символов");
    isValid = false;
  }

  if (!isRealDate(values.date)) {
    errors.date = true;
    toast.error("Дата должна быть в формате ДД.ММ.ГГГГ");
    isValid = false;
  }

  const amount = Number(String(values.amount).replace(",", "."));
  if (Number.isNaN(amount) || amount <= 0) {
    errors.amount = true;
    toast.error("Введите корректную сумму больше 0");
    isValid = false;
  }

  return { isValid, errors };
};
