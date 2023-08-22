import { PaginationaBtn } from './LoadMore.style';

export const Pagination = ({ onClick, children }) => {
  return (
    <>
      <PaginationaBtn onClick={onClick}>{children}</PaginationaBtn>
    </>
  );
};
