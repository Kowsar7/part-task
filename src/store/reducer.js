import Data from '../assets/data';

const initialState = {
  tableData: Data,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_CELL':
      const { rowIndex, cellIndex, value } = action.payload;
      const updatedTableData = [...state.tableData];
      updatedTableData[rowIndex][cellIndex] = value;
      return {
        ...state,
        tableData: updatedTableData,
      };
    case 'DELETE_ROW':
      const rowIndexforD = action.payload.rowIndex;
      const updatedTableDataforD = [...state.tableData];
      updatedTableDataforD.splice(rowIndexforD, 1);
      return {
        ...state,
        tableData: updatedTableDataforD,
      };
    case 'ADD_ROW':
      const newRow = {
        HEAT_ID: '0',
        SEMIPRODUCT_ID: '0',
        PREHEAT_ENTRY_DATE: '0',
        PREHEAT_ENTRY_TEMP: '0',
        PREHEAT_SET_TEMP: '0',
        ZONE1_ENTRY_DATE: '0',
        ZONE1_ENTRY_TEMP: '0',
      };

      return {
        ...state,
        tableData: [...state.tableData, newRow],
      };
    default:
      return state;
  }
};

export default tableReducer;
