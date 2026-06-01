import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import * as S from "./ExpenseForm .styled";
import { ModalBlok, Form } from "../AuthForm/AuthForm.styled";
import Categories from "../Categories/Categories";
import { ExpenseContext } from "../../context/ExpenseContext";
import { useForm } from "../../hooks/useForm";
import { validateEmptyFields } from "../../Validators/validateEmptyFields";
import { validateExpenseErrors } from "../../Validators/expenceValidator";
import { formatedDate, formatedInputDate } from "../../utils/utils";

function ExpenseForm({ selectedExpense, onEditComplete }) {
  const { addNewExpense, editExpense, expenses } = useContext(ExpenseContext);

  const editingExpense = expenses.find((expense) => expense._id === selectedExpense);

  const {
    formData,
    errors,
    focus,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
    resetForm,
    setFormData,
  } = useForm({
    initialValues: { name: "", date: "", amount: "", category: "" },
    validate: (values) => {
      const requiredFields = ["name", "date", "amount", "category"];
      const { hasEmpty, errors: emptyErrors } = validateEmptyFields(
        values,
        requiredFields
      );

      if (hasEmpty) {
        toast.error("Все поля должны быть заполнены");
        return { isValid: false, newErrors: emptyErrors };
      }

      const { isValid, errors: fieldErrors } = validateExpenseErrors(values);
      return { isValid, newErrors: fieldErrors };
    },
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData({
        name: editingExpense.description || "",
        date: formatedDate(editingExpense.date),
        amount: String(editingExpense.sum || ""),
        category: editingExpense.category || "",
      });
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExpense, editingExpense]);

  const handleCategoryChange = (category) => {
    handleChange({ target: { name: "category", value: category } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const expense = {
      description: formData.name.trim(),
      sum: Number(String(formData.amount).replace(",", ".")),
      category: formData.category,
      date: formatedInputDate(formData.date),
    };

    try {
      if (selectedExpense) {
        await editExpense({ id: selectedExpense, expense });
        onEditComplete();
      } else {
        await addNewExpense({ expense });
      }

      resetForm();
    } catch {
      // Текст ошибки уже выводится в ExpenseProvider через toast.error.
    }
  };

  return (
    <ModalBlok>
      <S.TitleForm>{selectedExpense ? "Редактирование" : "Новый расход"}</S.TitleForm>
      <Form onSubmit={handleSubmit}>
        <S.InputTitle>
          Описание{errors.name && <S.ErrorMark> *</S.ErrorMark>}
        </S.InputTitle>
        <S.InputExpenseForm
          name="name"
          placeholder="Введите описание"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          $isFocused={focus.name}
          $error={errors.name}
          aria-label="Описание расхода"
        />

        <S.InputTitle>
          Категория{errors.category && <S.ErrorMark> *</S.ErrorMark>}
        </S.InputTitle>
        <S.CategoryTags>
          <Categories
            selectedCategory={formData.category}
            onCategorySelect={handleCategoryChange}
          />
        </S.CategoryTags>

        <S.InputTitle>
          Дата{errors.date && <S.ErrorMark> *</S.ErrorMark>}
        </S.InputTitle>
        <S.InputExpenseForm
          name="date"
          placeholder="Введите дату"
          type="text"
          value={formData.date}
          onChange={handleChange}
          onFocus={() => handleFocus("date")}
          onBlur={() => handleBlur("date")}
          $isFocused={focus.date}
          $error={errors.date}
          aria-label="Дата расхода"
        />

        <S.InputTitle>
          Сумма{errors.amount && <S.ErrorMark> *</S.ErrorMark>}
        </S.InputTitle>
        <S.InputExpenseForm
          name="amount"
          placeholder="Введите сумму"
          type="text"
          value={formData.amount}
          onChange={handleChange}
          onFocus={() => handleFocus("amount")}
          onBlur={() => handleBlur("amount")}
          $isFocused={focus.amount}
          $error={errors.amount}
          aria-label="Сумма расхода"
        />

        <S.ExpenseButton
          type="submit"
          disabled={Object.values(errors).some((error) => error)}
        >
          {selectedExpense ? "Сохранить редактирование" : "Добавить новый расход"}
        </S.ExpenseButton>
      </Form>
    </ModalBlok>
  );
}

export default ExpenseForm;
