import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { removeBookFromCart } from "../../redux/CardSlice";
import { useDispatch } from "react-redux";

const CartBookTable = (props) => {
  const dispatch = useDispatch();
  const handleRemoveBookFromCart = (book) => {
    dispatch(removeBookFromCart(book));
  };
  return (
    <div
      style={{
        borderRight: "2px solid silver",
        paddingRight: "3rem",
        paddingTop: 0,
        height: "fit-content",
      }}
    >
      <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            [`& .${tableCellClasses.root}`]: {
              border: "none",
            },
            border: "none",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid silver" }}>
              <TableCell sx={{ paddingLeft: 0 }} align="left">
                BOOK
              </TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">QUANTITY</TableCell>
              <TableCell align="right">TOTAL PRICE</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.booksForPurchase.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ paddingLeft: 0 }} component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price} RSD</TableCell>
                <TableCell align="right">{10}</TableCell>
                <TableCell align="right">{10 * row.price} RSD</TableCell>
                <TableCell sx={{ paddingRight: 0 }} align="right">
                  <HighlightOffIcon
                    onClick={() => handleRemoveBookFromCart(row)}
                    className="delete-item-icon"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CartBookTable;
