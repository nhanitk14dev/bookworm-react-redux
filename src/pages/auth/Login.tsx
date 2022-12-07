import { useEffect } from "react";
import { ErrorLabel } from "../../styles/commonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { loginUser } from "../../features";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { LoginFormType } from "../../models";
import { LoginSchema } from "./../../validation/auth";
import { useFormik } from "formik";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [flashMsg, setFlashMsg] = useState<string>("");
  const [variantAlert, setVariantAlert] = useState<string>();
  const { auth, status, msgError } = useAppSelector((state) => state.auth);
  const isLoading = status === "loading";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values: LoginFormType) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    switch (status) {
      case "loading":
        console.log("loading");
        break;
      case "succeeded":
        if (msgError) {
          setVariantAlert("warning");
          setFlashMsg(msgError);
        }

        if (auth?.isLoggedIn) {
          setFlashMsg("Log in successfully");
          setVariantAlert("success");
          setTimeout(() => {
            navigate("/users");
          }, 1500);
        }

        break;
      case "failed":
        setVariantAlert("warning");
        setFlashMsg(msgError);
        break;
      default:
        break;
    }

    if (msgError) {
      setTimeout(() => {
        setFlashMsg("");
      }, 1500);
    }
  }, [status, auth, msgError, navigate]);

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
      <form className="form-user" onSubmit={formik.handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={isLoading}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorLabel>{formik.errors.email}</ErrorLabel>
          ) : null}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={isLoading}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorLabel>{formik.errors.password}</ErrorLabel>
          ) : null}
        </div>

        <input
          type="submit"
          value="Login"
          disabled={isLoading}
          className="btn btn-main"
        />
      </form>
    </>
  );
};

export default Login;
