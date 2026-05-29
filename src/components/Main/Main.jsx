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

const mockExpenses = [
  {
    id: 1,
    description: "Чинил машину",
    category: "Транспорт",
    date: "01.03.2026",
    amount: "1 244 ₽",
  },
  {
    id: 2,
    description: "Оплата квартиры",
    category: "Жилье",
    date: "05.03.2026",
    amount: "30 000 ₽",
  },
  {
    id: 3,
    description: "Курс по дизайну",
    category: "Образование",
    date: "12.03.2026",
    amount: "7 000 ₽",
  },
];

function Main() {
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
            {mockExpenses.map((expense) => (
              <TableRow
                key={expense.id}
                description={expense.description}
                category={expense.category}
                date={expense.date}
                amount={expense.amount}
              />
            ))}
          </STableBodyWrapper>
        </STableSection>
        <ExpenseForm />
      </STables>
    </SMain>
  );
}

export default Main;
