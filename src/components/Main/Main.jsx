import {
  SMain,
  SMainHeader,
  STableHeader,
  STableSection,
  SSectionTitle,
  STables,
  STableBodyWrapper,
} from "./Main.styled";
import { TableRow, TableFirstRow } from "../TableRows/TableRows";
import ExpenseForm from "../ExpenseForm/ExpenseForm ";
import { useContext, useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { categoryTranslations } from "../../const";
import { formatedDate } from "../../utils/utils";

function Main() {
  const { expenses, isLoading, deleteExpenseByID } = useContext(ExpenseContext);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleEditClick = (expenseId) => {
    setSelectedExpense((currentId) => (currentId === expenseId ? null : expenseId));
  };

  const handleEditComplete = () => {
    setSelectedExpense(null);
  };

  const handleDelete = async (expenseId) => {
    try {
      await deleteExpenseByID({ id: expenseId });
      if (selectedExpense === expenseId) {
        setSelectedExpense(null);
      }
    } catch {
      // Текст ошибки уже выводится в ExpenseProvider через toast.error.
    }
  };

  return (
    <SMain>
      <SMainHeader>Мои расходы</SMainHeader>
      <STables>
        <STableSection>
          <STableHeader>
            <SSectionTitle>Таблица расходов</SSectionTitle>
          </STableHeader>
          <TableFirstRow />
          <STableBodyWrapper>
            {isLoading && <p style={{ padding: "24px 32px" }}>Загрузка расходов...</p>}

            {!isLoading && expenses.length === 0 && (
              <p style={{ padding: "24px 32px", color: "#999999" }}>
                Расходов пока нет. Добавьте первый расход через форму справа.
              </p>
            )}

            {!isLoading &&
              expenses.map((expense) => (
                <TableRow
                  key={expense._id}
                  description={expense.description}
                  category={categoryTranslations[expense.category] || expense.category}
                  date={formatedDate(expense.date)}
                  amount={`${Number(expense.sum || 0).toLocaleString("ru-RU")} ₽`}
                  onEdit={() => handleEditClick(expense._id)}
                  onDelete={() => handleDelete(expense._id)}
                  isSelected={selectedExpense === expense._id}
                />
              ))}
          </STableBodyWrapper>
        </STableSection>

        <ExpenseForm
          selectedExpense={selectedExpense}
          onEditComplete={handleEditComplete}
        />
      </STables>
    </SMain>
  );
}

export default Main;
