/*
    todo: 
    - Check login, if not need to redirect login page
    - Call api get user list data
    - Show info user list has pagination
    - Have action add, edit page
*/

import { Container } from "react-bootstrap";
import { UserContainer } from './User.style';

const ListUser = () => {

  return (
    <>
      <UserContainer>
        <Container>
          <h2 className="title">List User</h2>
        </Container>
      </UserContainer>
    </>
  )
}

export default ListUser;