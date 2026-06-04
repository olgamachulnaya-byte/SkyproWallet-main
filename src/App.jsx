import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider";
import { ExpenseProvider } from "./context/ExpenseProvider";
import { GlobalStyles } from "./components/GlobalStyles.styled";

function App() {
  return (
    <AuthProvider>
      <ExpenseProvider>
        <GlobalStyles />
        <AppRoutes />
        <ToastContainer autoClose={1500} />
      </ExpenseProvider>
    </AuthProvider>
  );
}

export default App;
