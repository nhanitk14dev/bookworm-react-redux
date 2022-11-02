/*
  Use: https://react-hook-form.com/get-started
  There are some ways to validate form: 
  - Use @hookform/error-message to show message validate for Email field
  - Use only error state to show msg the password
  - Use Custom Hook with Resolver "yup"
  https://codesandbox.io/s/react-hook-form-apply-validation-ts-forked-nmbyh?file=/src/index.tsx
*/
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ErrorLabel } from "../../commonStyles";
import { useAppSelector, useAppDispatch } from '../../app/hook'
import { ILoginForm, loginUser, userStateSelector, fetchUserByToken } from "../../features/user/userSlice";
import { Navigate } from "react-router-dom";

const Login = () => {

  // Get state from Redux
  const dispatch = useAppDispatch();
  const [isSubmit, setIsSubmit] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
    criteriaMode: "all"
  });

  const onSubmit = (data: ILoginForm) => {
    const hasErrors = Object.keys(errors).length;
    if (!hasErrors) {
      dispatch(loginUser(data));
      console.log('run dispatch')
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
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