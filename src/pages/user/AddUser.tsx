import { Container } from "react-bootstrap";
import { UserContainer, UserInfoStyles } from './User.style';

const AddUser = () => {

  return (
    <>
      <UserContainer>
        <Container>
          <UserInfoStyles>
            <h2>Add New User</h2>
            <form className="form-user">
              <div className="form-group mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group mb-3">
                <label>User Name</label>
                <input type="name" className="form-control" placeholder="Enter User Name" />
              </div>
              <div className="form-group mb-3">
                <label>Address</label>
                <textarea name="address" className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-main">Create</button>
            </form>
          </UserInfoStyles>
        </Container>
      </UserContainer>
    </>
  );
}

export default AddUser;