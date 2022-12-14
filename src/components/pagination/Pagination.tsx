import { IPagination } from "../../models";
import { PaginationContainer } from "./Pagination.style";
import { usePagination, DOTS } from "../../app/usePagination";

const Pagination = (props: IPagination) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    className,
    onPageChange,
  });

  // Display pagination when the total of record > default: 4
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage: number = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer className={className}>
      <ul className="pagination-container">
        <li
          className={`pagination-item ${currentPage === 1 && "disabled"}`}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((page: number) => {
          if (page === DOTS) {
            return (
              <li key={page} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={page}
              className="pagination-item"
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          );
        })}

        <li
          className={`pagination-item ${
            currentPage === lastPage && "disabled"
          }`}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
