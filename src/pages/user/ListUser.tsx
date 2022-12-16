import { Container, Table } from "react-bootstrap";
import { UserContainer } from "./User.style";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { userStateSelector, fetchUsers } from "../../features";
import { useEffect, useMemo, useState } from "react";
import { PER_PAGE } from "../../app/usePagination";
import Pagination from "../../components/pagination/Pagination";

const ListUser = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(userStateSelector);

  // Use pagination hook
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Use memo to re-calculate data trigger change when currentPage change
  const currentTableData = useMemo(() => {
    const firstIndex = (currentPage - 1) * PER_PAGE;
    const lastIndex = firstIndex + PER_PAGE;

    return users.slice(firstIndex, lastIndex);
  }, [currentPage, users]);


  // Case state of users is empty, call api fetch user list
  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers({}));
    }
  }, [dispatch, users]);

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
              {currentTableData ? (
                currentTableData.map((user) => (
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
