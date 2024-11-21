
export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
  })
    .replace(/\//g, '.');

  return formattedDate;
};



export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};



export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => ascendingComparator(a, b, orderBy);
};



const descendingComparator = (a, b, orderBy) => {
  const valueA = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];
  const valueB = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];

  if (valueB < valueA) {
    return -1;
  }
  if (valueB > valueA) {
    return 1;
  }
  return 0;
};

const ascendingComparator = (a, b, orderBy) => {
  const valueA = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];
  const valueB = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];

  if (valueA < valueB) {
    return -1;
  }
  if (valueA > valueB) {
    return 1;
  }
  return 0;
};

