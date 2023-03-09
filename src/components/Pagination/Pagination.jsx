import React from 'react';
const Pagination = (props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(props.totalCards / props.cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <div>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => props.paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
