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
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ErrorLabel } from "../../commonStyles";
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { loginUser, fetchUserByToken, userStateSelector } from "../../features/user/userSlice";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {

  // Get state from Redux
  const dispatch = useAppDispatch();
  const { isLoggged } = useAppSelector(userStateSelector);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  type FormValues = {
    password: string;
    email: string;
  };

  // Multiple Error Messages: https://github.com/react-hook-form/error-message
  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>({
    criteriaMode: 'all',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmit(true);
    const hasErrors = Object.keys(errors).length;
    if (!hasErrors) {
      dispatch(loginUser(data));
    }
  };

  useEffect(() => {
    if (isLoggged) {
      navigate(from, { replace: true });
    }

    let token = localStorage.getItem("token");
    if (isSubmit && token) {
      dispatch(fetchUserByToken(token));
    }
  });

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "This input is required.",
            maxLength: {
              value: 120,
              message: "This input is exceed maxLength"
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "This is not a valid email format!"
            },
          })}
        />

        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <ErrorLabel key={type}>{message}</ErrorLabel>
              ))
              : null;
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: true,
          })} />

        {errors?.password?.type === "required" ? <ErrorLabel>This input is required.</ErrorLabel> : null}

        <input type="submit" />
      </form>
    </>
  );
}

export default Login;