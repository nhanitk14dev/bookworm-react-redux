import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorLabel } from "../../styles/commonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { loginUser, ILoginForm } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const {isLoggedIn} = useAppSelector((state) => state.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(loginUser(data))
  };

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/users')
    }
  }, [isLoggedIn, navigate])

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
          })}
        />

        {errors?.password?.type === "required" ? (
          <ErrorLabel>This input is required.</ErrorLabel>
        ) : null}

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
