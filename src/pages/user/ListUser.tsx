/*
    todo: 
    - Check login, if not need to redirect login page
    - Call api get user list data
    - Show info user list has pagination
    - Have action add, edit page
*/

import { Container, Table } from "react-bootstrap";
import { UserContainer } from './User.style';
import { Link} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { useEffect, useMemo, useState } from "react";
import PaginationBs, { DefaultPaginationValues } from '../../components/PaginationBs';
import _ from 'lodash';

const ListUser = () => {

  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState<any>(DefaultPaginationValues); // init pagination

  const callbackChangePage = (page: number) => {
    pagination._page = page;
    let newPagination = { ...pagination, _page: page }
    setPagination(newPagination);
     //todo check use effect trigger auto change to call api
  }

  const paginationProps = {
    ...pagination,
    setCurrentPage: callbackChangePage
  }

  return (
    <>
      <UserContainer>
        <Container>
          <h2 className="title">List User</h2>
          <Link to="add-new" relative="path" className="btn-main">Add New</Link>
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
              <tr>
                <td><Link target="_blank" to='id/edit'>John</Link></td>
                <td><Link target="_blank" to='id/edit'>John</Link></td>
                <td><Link target="_blank" to='id/edit'>John</Link></td>
                <td><Link target="_blank" to='id/edit'>John</Link></td>
              </tr>
              <tr><td colSpan={4}>Data not found !</td></tr>
            </tbody>
          </Table>

          <PaginationBs {...paginationProps} />
        </Container>
      </UserContainer>
    </>
  )
}

export default ListUser;