import { Container, Table } from "react-bootstrap";
import { UserContainer } from "./User.style";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsersAction } from "../../actions";
import Pagination from "../../components/Pagination";
import { PER_PAGE } from "../../app/hooks/usePagination";

const ListUser = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userState);

  // Use pagination hook
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Use memo to re-calculate data trigger change when currentPage change
  const currentTableData = useMemo(() => {
    const firstIndex = (currentPage - 1) * PER_PAGE;
    const lastIndex = firstIndex + PER_PAGE;

    return users.slice(firstIndex, lastIndex);
  }, [currentPage, users]);

  /*
    The Component dispatches a plain Object action to the Store. 
    We'll create a Saga that watches for all USERS_FETCH_REQUESTED actions and triggers an API call
    to fetch the user data.
  */

  useEffect(() => {
    // If we need to filter the api, use const params = new URLSearchParams({ params ).toString();
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <>
      <UserContainer>
        <Container>
          <h2 className="title">Contact Users List</h2>
          <Link to="/users/add-new" className="btn-main">
            Add New
          </Link>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.length ? (
                currentTableData.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>
                        <Link to={`/users/${user.id}/edit`}>{user.id}</Link>
                      </td>
                      <td>
                        <Link to={`/users/${user.id}/edit`}>{user.name}</Link>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4}>Data not found !</td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={users.length}
            pageSize={PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Container>
      </UserContainer>
    </>
  );
};

export default ListUser;
