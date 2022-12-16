import { useFormik } from "formik";
import { Container, Alert } from "react-bootstrap";
import { UserContainer, UserInfoStyles } from "./User.style";
import { ErrorLabel } from "../../styles/commonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { useEffect, useState } from "react";
import { addUser, userStateSelector } from "../../features";
import { IUser, UserDefault } from "../../models";
import { AddUserSchema } from "../../validation/users";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status } = useAppSelector(userStateSelector);
  const [flashMsg, setFlashMsg] = useState<string>("");

  const formik = useFormik({
    initialValues: UserDefault,
    validationSchema: AddUserSchema,
    onSubmit: (values: IUser) => {
      dispatch(addUser(values));
    },
  });

  useEffect(() => {
    if (status === "succeeded") {
      setFlashMsg("Add user successfully new!");
      const time = setTimeout(() => {
        navigate("/users");
        setFlashMsg("");
      }, 3000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [status, navigate]);

  return (
    <>
      <UserContainer>
        <Container>
          <UserInfoStyles>
            <h2>Add New User</h2>
            <div>
              {flashMsg ? (
                <Alert key="success" variant="success">
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
                />
                {formik.touched.password && formik.errors.password ? (
                  <ErrorLabel>{formik.errors.password}</ErrorLabel>
                ) : null}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="username">User Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                  <ErrorLabel>{formik.errors.name}</ErrorLabel>
                ) : null}
              </div>
              <div className="form-group mb-3">
                <label>Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.touched.address && formik.errors.address ? (
                  <ErrorLabel>{formik.errors.address}</ErrorLabel>
                ) : null}
              </div>
              <button type="submit" className="btn btn-main">
                Create
              </button>
            </form>
          </UserInfoStyles>
        </Container>
      </UserContainer>
    </>
  );
};

export default AddUserPage;
