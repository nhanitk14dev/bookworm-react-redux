/* 
  Formik: There are 2 ways to do form-level validation with Formik
  handleSubmit: A submission handler
  handleChange: A change handler to pass to each <input>, <select>, or <textarea>
  values: Our form’s current values
  Formik Typescript: https://formik.org/docs/examples/typescript
  useFormik() is a custom React hook. Only use this hook if you are NOT using <Formik> or withFormik.
*/

import { useFormik } from "formik";
import { Container, Alert } from "react-bootstrap";
import { UserContainer, UserInfoStyles } from "./User.style";
import { ErrorLabel } from "../../commonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { IUser, ActionType, UserDefault } from "../../models";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserDetailAction } from "../../actions";
import { getUserDetailSelector } from "../../reducers/users.reducer";
import { EditUserSchema } from "../../validation";
import { apiBaseRoute } from "../../api";

const EditUserPage = () => {
  const dispatch = useAppDispatch();
  const [flashMsg, setFlashMsg] = useState<string>("");
  const { userId } = useParams();
  const navigate = useNavigate();
  const userSelector: any = useAppSelector((state) =>
    getUserDetailSelector(state.userState, userId as string)
  );
  const { status, error, isLoading } = useAppSelector(
    (state) => state.userState
  );
  const variantAlert = error ? "danger" : "success";
  const userDetail = userSelector ?? UserDefault;

  const formik = useFormik({
    initialValues: userDetail,
    validationSchema: EditUserSchema,
    onSubmit: (values: IUser) => {
      dispatch(updateUserDetailAction(values));
    },
  });

  // Case refresh pages, user detail undefine
  useEffect(() => {
    if (!formik.values?.email) {
      fetch(`${apiBaseRoute}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.email) {
            formik.setValues(data);
          } else {
            navigate("/404");
          }
        });
    }
  }, [formik, userId, navigate]);

  useEffect(() => {
    switch (status) {
      case ActionType.USER_UPDATE_SUCCEEDED:
        setFlashMsg("Update user detail successfully!");
        break;
      case ActionType.USER_UPDATE_FAILED:
        setFlashMsg("Update user detail failed! Try again");
        break;
      default:
        setFlashMsg("");
    }

    const timer = setTimeout(() => {
      setFlashMsg("");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  return (
    <>
      <UserContainer>
        <Container>
          <UserInfoStyles>
            <h2>Edit User</h2>
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
                  disabled={true}
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
              <div className="form-group mb-3">
                <label htmlFor="username">User Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
                {formik.touched.address && formik.errors.address ? (
                  <ErrorLabel>{formik.errors.address}</ErrorLabel>
                ) : null}
              </div>
              <button type="submit" className="btn btn-main">
                Update
              </button>
            </form>
          </UserInfoStyles>
        </Container>
      </UserContainer>
    </>
  );
};

export default EditUserPage;
