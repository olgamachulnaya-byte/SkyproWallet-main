import * as S from "./ExpenseForm .styled";
import { ModalBlok, Form } from "../AuthForm/AuthForm.styled";
import Categories from "../Categories/Categories";

function ExpenseForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ModalBlok>
      <S.TitleForm>Новый расход</S.TitleForm>
      <Form onSubmit={handleSubmit}>
        <S.InputTitle>Описание</S.InputTitle>
        <S.InputExpenseForm
          name="name"
          placeholder="Введите описание"
          type="text"
          aria-label="Описание расхода"
        />

        <S.InputTitle>Категория</S.InputTitle>
        <S.CategoryTags>
          <Categories selectedCategory="housing" />
        </S.CategoryTags>

        <S.InputTitle>Дата</S.InputTitle>
        <S.InputExpenseForm
          name="date"
          placeholder="Введите дату"
          type="text"
          aria-label="Дата расхода"
        />

        <S.InputTitle>Сумма</S.InputTitle>
        <S.InputExpenseForm
          name="amount"
          placeholder="Введите сумму"
          type="text"
          aria-label="Сумма расхода"
        />

        <S.ExpenseButton type="button" disabled>
          Добавить новый расход
        </S.ExpenseButton>
      </Form>
    </ModalBlok>
  );
}

export default ExpenseForm;
