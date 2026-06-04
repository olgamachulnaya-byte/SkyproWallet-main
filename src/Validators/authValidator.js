import { toast } from "react-toastify";

export const validateLoginErrors = (values) => {
  const errors = {};
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]{2,}$/;

  if (Object.prototype.hasOwnProperty.call(values, "name")) {
    const name = values.name.trim();

    if (name && !nameRegex.test(name)) {
      errors.name = true;
      toast.error("Введите корректное имя");
      isValid = false;
    }
  }

  if (values.login && !emailRegex.test(values.login)) {
    errors.login = true;
    toast.error("Введите корректный email");
    isValid = false;
  }

  if (values.password && values.password.length < 4) {
    errors.password = true;
    toast.error("Пароль должен быть не менее 4 символов");
    isValid = false;
  }

  return { isValid, errors };
};
