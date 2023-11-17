import { getNumbers } from '../../utils';

const items = getNumbers(1, 42)
  .map(n => `Item ${n}`);

export const Pagination = ({ total, perPage, currentPage }) => {
  return (
    <div>
      <ul className="pagination">
        <li className="page-item disabled">
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled="true"
          >
            «
          </a>
        </li>
        {}
        <li className="page-item active">
          <a data-cy="pageLink" className="page-link" href="#1">1</a>
        </li>
        <li className="page-item">
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled="false"
          >
            »
          </a>
        </li>
      </ul>
      <ul>
        <li data-cy="item">Item 1</li>
        <li data-cy="item">Item 2</li>
        <li data-cy="item">Item 3</li>
        <li data-cy="item">Item 4</li>
        <li data-cy="item">Item 5</li>
      </ul>
    </div>
  );
};
