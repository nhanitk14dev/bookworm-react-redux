import { Container, Table } from "react-bootstrap";
import { UserContainer } from "./User.style";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { userStateSelector, fetchUsers } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import PaginationBs, {
  DefaultPaginationValues,
} from "../../components/PaginationBs";

const ListUser = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(userStateSelector);
  const [pagination, setPagination] = useState<any>(DefaultPaginationValues); // init pagination

  useEffect(() => {
    dispatch(fetchUsers(pagination));
  }, [pagination, dispatch]);

  const callbackChangePage = (page: number) => {
    pagination._page = page;
    let newPagination = { ...pagination, _page: page };
    setPagination(newPagination);
    //todo check use effect trigger auto change to call api
    dispatch(fetchUsers(newPagination));
  };

  const paginationProps = {
    ...pagination,
    setCurrentPage: callbackChangePage,
  };

  return (
    <>
      <UserContainer>
        <Container>
          <h2 className="title">List User</h2>
          <Link to="add-new" relative="path" className="btn-main">
            Add New
          </Link>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Name (Link to RTK Query)</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <Link to={`${user.id}/edit`}>{user.id}</Link>
                    </td>
                    <td>
                      <Link to={`${user.id}/edit`}>{user.name}</Link>
                    </td>
                    <td>
                      <Link to={`${user.id}/edit-RTKquery`}>{user.name}</Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>Data not found !</td>
                </tr>
              )}
            </tbody>
          </Table>

          <PaginationBs {...paginationProps} />
        </Container>
      </UserContainer>
    </>
  );
};

export default ListUser;