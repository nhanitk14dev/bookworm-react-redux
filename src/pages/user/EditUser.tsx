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
import { ErrorLabel } from "../../styles/commonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { useEffect, useState } from "react";
import { updateUser, getUserDetailSelector } from "../../features";
import { useParams } from "react-router-dom";
import { EditUserSchema } from "../../validation/users";
import { IUser } from "./../../models/index";
const baseAPI = process.env.REACT_APP_API_BASE_URL;

const EditUserPage = () => {
  const dispatch = useAppDispatch();
  const [flashMsg, setFlashMsg] = useState<string>("");
  const { userId } = useParams();
  const userSelector = useAppSelector((state) =>
    getUserDetailSelector(state.user, userId as string)
  );
  const { editUser, status } = useAppSelector((state) => state.user);
  const userDetail = userSelector ?? editUser;
  const isLoading = status === "loading";

  const formik = useFormik({
    initialValues: userDetail,
    validationSchema: EditUserSchema,
    onSubmit: (values: IUser) => {
      dispatch(updateUser(values));
    },
  });

  // Case refresh pages, user detail undefine
  useEffect(() => {
    if (!formik.values?.email) {
      fetch(`${baseAPI}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.email) {
            formik.setValues(data);
          }
        });
    }
  }, [formik, userId]);

  useEffect(() => {
    // todo: should move to common service
    switch (status) {
      case "succeeded":
        setFlashMsg("Update user successfully!");
        break;
      case "failed":
        setFlashMsg("Update failded!");
        break;
      default:
        return;
    }

    const time = setTimeout(() => {
      setFlashMsg("");
    }, 1500);
    return () => {
      clearTimeout(time);
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
                  disabled={isLoading}
                />
                {formik.touched.email && formik.errors.email ? (
                  <ErrorLabel>{formik.errors.email}</ErrorLabel>
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
              <button
                type="submit"
                className="btn btn-main"
                disabled={isLoading}
              >
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
