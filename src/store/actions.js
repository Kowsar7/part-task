export const editCell = (rowIndex, cellIndex, value) => ({
  type: 'EDIT_CELL',
  payload: {
    rowIndex,
    cellIndex,
    value,
  },
});

export const deleteRow = (rowIndex) => ({
  type: 'DELETE_ROW',
  payload: {
    rowIndex,
  },
});

export const addRow = () => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_ROW',
    });
  };
};
