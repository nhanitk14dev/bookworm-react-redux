import Pagination from 'react-bootstrap/Pagination';

export interface IPagination {
  _start: number;
  _end: number;
  _page: number;
}
export interface ChildProps extends IPagination {
  setCurrentPage: (page: number) => void;
}

// Use JSON Server: https://www.npmjs.com/package/json-server#paginate
export const DefaultPaginationValues = {
  _start: 0,
  _end: 5,
  _page: 1
}


const PaginationBs = (props: ChildProps) => {

  const { _page, _end } = props;

  let items = [];
  for (let number = 1; number <= _end; number++) {
    items.push(
      <Pagination.Item key={number} active={number === _page} onClick={() => props.setCurrentPage(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

export default PaginationBs;