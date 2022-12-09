/*
  Use: https://react-hook-form.com/get-started
  There are some ways to validate form: 
  - Use @hookform/error-message to show message validate for Email field
  - Use only error state to show msg the password
  - Use Custom Hook with Resolver "yup"
  https://codesandbox.io/s/react-hook-form-apply-validation-ts-forked-nmbyh?file=/src/index.tsx
  - React Hook Form with ts: https://react-hook-form.com/ts/
*/
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorLabel } from "../../commonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { ActionType, LoginFormType } from "../../models";
import { loginAction } from "../../actions";
import { Alert } from "react-bootstrap";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { auth, status, isLoading } = useAppSelector(
    (state) => state.authState
  );
  const [flashMsg, setFlashMsg] = useState<string>("");
  const [variantAlert, setVariantAlert] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormType>({
    criteriaMode: "all",
  });

  const onSubmit = (formValues: LoginFormType) => {
    dispatch(loginAction(formValues));
  };

  useEffect(() => {
    switch (status) {
      case ActionType.USER_LOGIN_SUCCEEDED:
        if (auth?.isLoggedIn) {
          setVariantAlert("success");
          setFlashMsg("Login successfully!");
          setTimeout(() => {
            navigate("/users");
          }, 1500);
        }

        break;
      case ActionType.USER_LOGIN_FAILED:
        setVariantAlert("danger");
        setFlashMsg("Login failed! Try again");
        break;
      default:
        setFlashMsg("");
    }

    const timer = setTimeout(() => {
      setFlashMsg("");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [status, auth, navigate]);

  return (
    <>
      <h2>Login Page</h2>
      <div>
        {flashMsg ? (
          <Alert key={variantAlert} variant={variantAlert}>
            {flashMsg}
          </Alert>
        ) : null}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          disabled={isLoading}
          {...register("email", {
            required: "This input is required.",
            maxLength: {
              value: 120,
              message: "This input is exceed maxLength",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "This is not a valid email format!",
            },
          })}
        />

        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <ErrorLabel key={type}>{message}</ErrorLabel>
                ))
              : null;
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          disabled={isLoading}
          {...register("password", {
            required: true,
          })}
        />

        {errors?.password?.type === "required" ? (
          <ErrorLabel>This input is required.</ErrorLabel>
        ) : null}

        <input type="submit" disabled={isLoading} />
      </form>
    </>
  );
};

export default Login;
