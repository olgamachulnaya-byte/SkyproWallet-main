import * as S from "./AuthForm.styled";
import { signIn, signUp } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { validateEmptyFields } from "../../Validators/validateEmptyFields";
import { validateLoginErrors } from "../../Validators/authValidator";

function AuthForm({ isSignUp }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  const initialValues = isSignUp
    ? { name: "", login: "", password: "" }
    : { login: "", password: "" };

  const {
    formData,
    focus,
    errors,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
  } = useForm({
    initialValues,
    validate: (values) => {
      const requiredFields = Object.keys(initialValues);
      const { hasEmpty, errors: emptyErrors } = validateEmptyFields(
        values,
        requiredFields
      );

      const { isValid, errors: fieldErrors } = validateLoginErrors(values);
      const newErrors = { ...fieldErrors, ...emptyErrors };

      if (hasEmpty) {
        toast.error("Все поля должны быть заполнены");
      }

      return {
        isValid: !hasEmpty && isValid,
        newErrors,
      };
    },
  });

  const hasErrors = Object.values(errors).some((err) => err);

  const renderInput = ({ name, type = "text", placeholder }) => {
    const isError = !!errors[name];
    const value = formData[name] || "";

    return (
      <S.InputField>
        <S.InputAuthForm
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={isError ? `${placeholder} *` : placeholder}
          onFocus={() => handleFocus(name)}
          onBlur={() => handleBlur(name)}
          $isFocused={focus[name]}
          $error={isError}
        />
        {isError && value && (
          <S.InputErrorMark>
            <S.InputValueMirror>{type === "password" ? "" : value}</S.InputValueMirror>
            <S.InputStar>*</S.InputStar>
          </S.InputErrorMark>
        )}
      </S.InputField>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        if (isSignUp) {
          navigate(RoutesApp.SIGN_IN);
        } else {
          updateUserInfo(data);
          navigate(RoutesApp.MAIN);
        }
      }
    } catch (err) {
      toast.error(err.message || "Что-то пошло не так");
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <S.Title>{isSignUp ? "Регистрация" : "Вход"}</S.Title>
            <S.Form onSubmit={handleSubmit}>
              {isSignUp &&
                renderInput({
                  name: "name",
                  placeholder: "Имя",
                })}

              {renderInput({
                name: "login",
                placeholder: "Эл. почта",
              })}

              {renderInput({
                name: "password",
                type: "password",
                placeholder: "Пароль",
              })}

              {hasErrors && (
                <S.FormError>
                  Упс! Введенные вами данные некорректны.
                  <br />
                  Введите данные корректно и повторите попытку.
                </S.FormError>
              )}

              <S.AuthButton type="submit" disabled={hasErrors}>
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.AuthButton>
              <S.TextGroep>
                {isSignUp ? (
                  <>
                    <S.ModalText>Уже есть аккаунт?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_IN}>Войдите здесь</S.ModalLink>
                  </>
                ) : (
                  <>
                    <S.ModalText>Нужно зарегистрироваться?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_UP}>
                      Регистрируйтесь здесь
                    </S.ModalLink>
                  </>
                )}
              </S.TextGroep>
            </S.Form>
          </S.ModalBlok>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}

export default AuthForm;
