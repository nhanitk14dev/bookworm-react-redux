/* 
  Formik: There are 2 ways to do form-level validation with Formik
  handleSubmit: A submission handler
  handleChange: A change handler to pass to each <input>, <select>, or <textarea>
  values: Our form’s current values
  Formik Typescript: https://formik.org/docs/examples/typescript
  useFormik() is a custom React hook. Only use this hook if you are NOT using <Formik> or withFormik.
*/

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Alert } from "react-bootstrap";
import { UserContainer, UserInfoStyles } from './User.style';
import { ErrorLabel } from "../../commonStyles";
import { useEffect, useState } from 'react';
import { IUser } from '../../models/user.model';
import { useNavigate, useParams } from 'react-router-dom';

// Other ways to get user detail from RTK Query in service
import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation
} from '../../services/userService';

const EditUserRTKQuery = () => {

  const [flashMsg, setFlashMsg] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDisabledForm, setIsDisabledForm] = useState<boolean>(false);
  const { userId } = useParams();
  const navigate = useNavigate();

  // Other ways to get user detail from RTK Query in service
  // Using a query hook automatically fetches data and returns query values
  // Individual hooks are also accessible under the generated endpoints:
  // https://redux-toolkit.js.org/tutorials/rtk-query
  /* utilityDeleting:
     You can always check data, status, and error to determine the right UI to render. In addition, useQuery 
     also provides utility booleans like isLoading, isFetching, isSuccess, and isError for the latest request.
  */

  // Handle isLoading call api get user info
  const { data, error, isLoading } = useGetUserByIdQuery(`${userId}`);
  const [updateUserById] = useUpdateUserByIdMutation();
  const [deleteUserById, utilityDeleting] = useDeleteUserByIdMutation();

  useEffect(() => {
    if (data) {
      formik.setValues(data);
    }
  }, [data]);

  useEffect(() => {
    // todo: should move to common service
    if (flashMsg) {
      const time = setTimeout(() => {
        setFlashMsg('');
      }, 3000);

      return () => {
        clearTimeout(time);
      }
    }

  }, [flashMsg]);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      address: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      address: Yup.string().max(100, 'Must be 100 characters or less'),
      password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    }),
    onSubmit: (values: IUser) => {
      setIsEditing(true);
      // handle call api
      let params = { ...values, id: userId };
      updateUserById(params)
        .then((result) => {
          console.log('Update success', result);
          setFlashMsg('Update user successfully!')
          setIsEditing(false);
        })
        .catch((error) => console.error('Update Error', error))
    }
  });


  // Handle status deleting
  useEffect(() => {
    if (utilityDeleting.isLoading) {
      setIsDisabledForm(true);
    }

    if (utilityDeleting.isError) {
      console.error('Deleting user was error')
    }

    if (utilityDeleting.isSuccess) {
      setFlashMsg('Delete user successfully!');
      setTimeout(() => {
        navigate('/users');
      }, 3000);
    }
  }, [
    utilityDeleting.isLoading,
    utilityDeleting.isError,
    utilityDeleting.isSuccess
  ]);

  return (
    <>
      {error ? (
        <><Container><h3>Oh no, there was an error or redirect to 404 pages</h3></Container></>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <UserContainer>
            <Container>
              <UserInfoStyles>
                <h2>Edit User</h2>
                <div>
                  {flashMsg ? (<Alert key="success" variant="success">{flashMsg}</Alert>) : null}
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
                    <label htmlFor='password'>Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      disabled={isDisabledForm}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <ErrorLabel>{formik.errors.password}</ErrorLabel>
                    ) : null}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor='username'>User Name</label>
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
                  <button type="submit" disabled={isEditing} className="btn btn-main">Update</button>
                </form>

                <div className='mt-2'>
                  <button
                    className="btn btn-main"
                    onClick={() => deleteUserById(`${userId}`)}
                    disabled={utilityDeleting.isLoading}
                  >Delele</button>
                </div>

              </UserInfoStyles>
            </Container>
          </UserContainer>
        </>
      ) : null}
    </>
  )
}

export default EditUserRTKQuery;