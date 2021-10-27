import * as React from "react";
import "./clients.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, capacity) {
  return { name, capacity };
}

const rows = [
  createData("Durgesh glass & china block", "100 TPD"),
  createData("Pooja glass works", "60 TPD"),
  createData("Mittal glass", "35 TPD"),
  createData("B.K. glass Industries", "125 TPD"),
  createData("Faruki glass Industries", "100 TPD"),
  createData("Paras glass Industries (Agra)", "30 TPD"),
  createData("Om glass works pvt. Ltd. - I", "35 TPD"),
  createData("New Pankaj glass works", "45 TPD"),
  createData("F.M. glass works", "60 TPD"),
  createData("Meera glass works", "110 TPD"),
  createData("Janta glass (Baroda)", "150 TPD"),
  createData("Haldyn glass (Baroda)", "Cullet washing plant"),
  createData("Geeta glass works", "100 TPD"),
  createData("Om glass works pvt. Ltd. – II", "80 TPD"),
  createData("Vijeta glass", "40 TPD"),
  createData("Firozabad glass shell Industries", "25 TPD"),
  createData("Mittal ceramics", "200 TPD"),
  createData("Sitaram glass works", "125 TPD"),
  createData("Girdhari lal manohar lal glass works", "125 TPD"),
  createData("Goyal glassware pvt. Ltd.", "160 TPD"),
  createData("Lal ji paper and board", "------"),
  createData("I.B. glass works", "90 TPD"),
  createData("Om glass works pvt. Ltd. -III", "150 TPD"),
  createData("B.K. glass Industries – II", "225 TPD"),
  createData("Advance lamp components", "70 TPD"),
  createData("Om Glass works pvt. Ltd. - IV", "225 TPD"),
  createData("Sun Glass works pvt. Ltd.", "120 TPD"),
  createData("Esab electrodes (Kolkata)", "Batch House"),
  createData("Balaji soaps & chemicals (Pondicherry)", "Batch House"),
  createData("Phillips India (Baroda)", "Batch House"),
  createData("Emerge glass", "200 TPD"),
];

export default function Clients() {
  return (
    <div className="clients-main">
      <div className="clients-title">Our Clients</div>
      <div className="clients-content">
        MAC Infratech Metal Private Limited undertakes a wide variety of
        projects, big and small, and understands that each one is different, but
        all require the same attention to detail.
      </div>

      <div className="clients-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>S.No.</StyledTableCell>
                <StyledTableCell>Name of Client</StyledTableCell>
                <StyledTableCell>Capacity</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.capacity}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
