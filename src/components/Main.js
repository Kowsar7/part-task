import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCell, deleteRow, addRow } from '../store/actions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import classes from './Main.module.css';

export default function Main() {
  const tableData = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  const handleCellEdit = (rowIndex, cellIndex, value) => {
    dispatch(editCell(rowIndex, cellIndex, value));
  };

  const handleDeleteRow = (rowIndex) => {
    dispatch(deleteRow(rowIndex));
  };

  const handleAddRow = () => {
    dispatch(addRow());
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead className={classes.TableHeadRow} sx={{ color: 'primary' }}>
            <TableRow sx={{ color: 'primary' }}>
              <TableCell className={classes.HeadTitle}>HEAT ID</TableCell>
              <TableCell className={classes.HeadTitle}>
                SEMIPRODUCT ID
              </TableCell>
              <TableCell className={classes.HeadTitle}>
                PREHEAT ENTRY DATE
              </TableCell>
              <TableCell className={classes.HeadTitle}>
                PREHEAT ENTRY TEMP
              </TableCell>
              <TableCell className={classes.HeadTitle}>
                PREHEAT SET TEMP
              </TableCell>
              <TableCell className={classes.HeadTitle}>
                ZONE1 ENTRY DATE
              </TableCell>
              <TableCell className={classes.HeadTitle}>
                ZONE1 ENTRY TEMP
              </TableCell>
              <TableCell className={classes.HeadTitle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item, rowIndex) => (
              <TableRow
                key={item.HEAT_ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  className={classes.BodyCell}
                  component="th"
                  scope="row"
                >
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 0, e.target.innerText)
                    }
                  >
                    {item.HEAT_ID}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 1, e.target.innerText)
                    }
                  >
                    {item.SEMIPRODUCT_ID}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 2, e.target.innerText)
                    }
                  >
                    {item.PREHEAT_ENTRY_DATE}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 3, e.target.innerText)
                    }
                  >
                    {item.PREHEAT_ENTRY_TEMP}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 4, e.target.innerText)
                    }
                  >
                    {item.PREHEAT_SET_TEMP}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 5, e.target.innerText)
                    }
                  >
                    {item.ZONE1_ENTRY_DATE}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellEdit(rowIndex, 6, e.target.innerText)
                    }
                  >
                    {item.ZONE1_ENTRY_TEMP}
                  </div>
                </TableCell>
                <TableCell className={classes.BodyCell}>
                  <Button
                    className={classes.DeleteButton}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleDeleteRow(rowIndex)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        className={classes.AddButton}
        onClick={handleAddRow}
        variant="contained"
      >
        Add Row
      </Button>
    </div>
  );
}
