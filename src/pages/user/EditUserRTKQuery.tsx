/* 
  Formik: There are 2 ways to do form-level validation with Formik
  handleSubmit: A submission handler
  handleChange: A change handler to pass to each <input>, <select>, or <textarea>
  values: Our form’s current values
  Formik Typescript: https://formik.org/docs/examples/typescript
  useFormik() is a custom React hook. Only use this hook if you are NOT using <Formik> or withFormik.

  Other ways to get user detail from RTK Query in service:
  https://redux-toolkit.js.org/tutorials/rtk-query
*/

import { useFormik } from "formik";
import { Container, Alert } from "react-bootstrap";
import { UserContainer, UserInfoStyles } from "./User.style";
import { ErrorLabel } from "../../styles/commonStyles";
import { useEffect, useState } from "react";
import { IUser } from "../../models";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} from "../../services/userService";
import { useAppSelector } from "../../app/hook";
import { getUserDetailSelector } from "../../features";
import { EditUserSchema } from "../../validation/auth";

const EditUserRTKQuery = () => {
  const [flashMsg, setFlashMsg] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDisabledForm, setIsDisabledForm] = useState<boolean>(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  // Handle isLoading call api get user info
  const { data, error, isLoading } = useGetUserByIdQuery(`${userId}`);
  const [updateUserById] = useUpdateUserByIdMutation();
  const [deleteUserById, utilityDeleting] = useDeleteUserByIdMutation();
  const userSelector = useAppSelector((state) =>
    getUserDetailSelector(state.user, userId as string)
  );
  const { editUser } = useAppSelector((state) => state.user);
  const userDetail = userSelector ?? editUser;

  const formik = useFormik({
    initialValues: userDetail,
    validationSchema: EditUserSchema,
    onSubmit: (values: IUser) => {
      setIsEditing(true);
      // handle call api
      let params = { ...values, id: userId };
      updateUserById(params)
        .then((result) => {
          console.log(result);

          setFlashMsg("Update user successfully!");
          setIsEditing(false);
        })
        .catch((error) => console.error("Update Error", error));
    },
  });

  // Case refresh pages, user detail undefine, we call api query
  useEffect(() => {
    if (!formik.values?.email && data?.email) {
      formik.setValues(data);
    }
  }, [data, formik]);

  // Handle status deleting
  useEffect(() => {
    if (utilityDeleting?.isLoading) {
      setIsDisabledForm(true);
    }

    if (utilityDeleting?.isError) {
      console.error("Deleting user was error");
    }

    if (utilityDeleting?.isSuccess) {
      setFlashMsg("Delete user successfully!");
      setTimeout(() => {
        navigate("/users");
      }, 3000);
    }
  }, [utilityDeleting, navigate]);

  useEffect(() => {
    // todo: should move to common service
    if (flashMsg) {
      const time = setTimeout(() => {
        setFlashMsg("");
      }, 3000);

      return () => {
        clearTimeout(time);
      };
    }
  }, [flashMsg]);

  return (
    <>
      {error ? (
        <>
          <Container>
            <h3>Oh no, there was an error or redirect to 404 pages</h3>
          </Container>
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <UserContainer>
            <Container>
              <UserInfoStyles>
                <div className="header-form">
                  <h2>Edit User</h2>
                </div>
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
                      disabled={isDisabledForm}
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
                      disabled={isDisabledForm}
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
                      disabled={isDisabledForm}
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <ErrorLabel>{formik.errors.address}</ErrorLabel>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    disabled={isEditing}
                    className="btn btn-main"
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-main btn-delete"
                    onClick={() => deleteUserById(`${userId}`)}
                    disabled={utilityDeleting.isLoading}
                  >
                    Delete
                  </button>
                </form>
              </UserInfoStyles>
            </Container>
          </UserContainer>
        </>
      ) : null}
    </>
  );
};

export default EditUserRTKQuery;
