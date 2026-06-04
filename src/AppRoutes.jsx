import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage .jsx";
import { RoutesApp } from "./const.js";
import Layout from "./components/Layout/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AnalysisPage from "./pages/Analysis/Analysis.jsx";
import NewExpensePage from "./pages/NewExpensePage/NewExpensePage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path={RoutesApp.MAIN} element={<MainPage />} />
          <Route path={RoutesApp.ANALYSIS} element={<AnalysisPage />} />
          <Route path={RoutesApp.NEW_EXPENSE} element={<NewExpensePage />} />
        </Route>
        <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
        <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
