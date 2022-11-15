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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { IUser } from '../../models/user.model';

const AddUserPage = () => {

  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<IUser>();
  const [isSubmitting, setIsSubmiting] = useState<boolean>(false);
  const [flashMsg, setFlashMsg] = useState<string>('');

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
      setFormValues(values);
    }
  });


  return (
    <>
      <UserContainer>
        <Container>
          <UserInfoStyles>
            <h2>Add New User</h2>
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
              <button type="submit" className="btn btn-main">Create</button>
            </form>
          </UserInfoStyles>
        </Container>
      </UserContainer>
    </>
  );
}

export default AddUserPage;