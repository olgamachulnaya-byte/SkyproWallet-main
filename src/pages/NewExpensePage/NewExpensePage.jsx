import ExpenseForm from "../../components/ExpenseForm/ExpenseForm ";
import { ExpenseProvider } from "../../context/ExpenseProvider";
import * as S from "./NewExpensePage.styled";

function NewExpensePage() {
  return (
    <ExpenseProvider>
      <S.Page>
        <ExpenseForm selectedExpense={null} onEditComplete={() => {}} />
      </S.Page>
    </ExpenseProvider>
  );
}

export default NewExpensePage;
