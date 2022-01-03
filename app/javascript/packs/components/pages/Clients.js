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
import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";

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

function createData(sno, name, capacity) {
  return { sno, name, capacity };
}

const rows = [
  createData("1", "Durgesh glass & china block", "100 TPD"),
  createData("2", "Pooja glass works", "60 TPD"),
  createData("3", "Mittal glass", "35 TPD"),
  createData("4", "B.K. glass Industries", "125 TPD"),
  createData("5", "Faruki glass Industries", "100 TPD"),
  createData("6", "Paras glass Industries (Agra)", "30 TPD"),
  createData("7", "Om glass works pvt. Ltd. - I", "35 TPD"),
  createData("8", "New Pankaj glass works", "45 TPD"),
  createData("9", "F.M. glass works", "60 TPD"),
  createData("10", "Meera glass works", "110 TPD"),
  createData("11", "Janta glass (Baroda)", "150 TPD"),
  createData("12", "Haldyn glass (Baroda)", "Cullet washing plant"),
  createData("13", "Geeta glass works", "100 TPD"),
  createData("14", "Om glass works pvt. Ltd. – II", "80 TPD"),
  createData("15", "Vijeta glass", "40 TPD"),
  createData("16", "Firozabad glass shell Industries", "25 TPD"),
  createData("17", "Mittal ceramics", "200 TPD"),
  createData("18", "Sitaram glass works", "125 TPD"),
  createData("19", "Girdhari lal manohar lal glass works", "125 TPD"),
  createData("20", "Goyal glassware pvt. Ltd.", "160 TPD"),
  createData("21", "Lal ji paper and board", "------"),
  createData("22", "I.B. glass works", "90 TPD"),
  createData("23", "Om glass works pvt. Ltd. -III", "150 TPD"),
  createData("25", "B.K. glass Industries – II", "225 TPD"),
  createData("26", "Advance lamp components", "70 TPD"),
  createData("27", "Om Glass works pvt. Ltd. - IV", "225 TPD"),
  createData("28", "Sun Glass works pvt. Ltd.", "120 TPD"),
  createData("29", "Esab electrodes (Kolkata)", "Batch House"),
  createData("30", "Balaji soaps & chemicals (Pondicherry)", "Batch House"),
  createData("31", "Phillips India (Baroda)", "Batch House"),
  createData("32", "Emerge glass", "200 TPD"),
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
        <BaseTable data={rows} width={1000} height={700}>
          <Column
            key="index"
            title="S. No."
            width={200}
            // align="center"
            dataKey="sno"
          />
          <Column
            key="name"
            title="Name of Client"
            dataKey="name"
            width={400}
            align="center"
          />
          <Column
            key="capacity"
            title="Capacity"
            dataKey="capacity"
            width={400}
            align="center"
          />
        </BaseTable>

        {/* <TableContainer component={Paper}>
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
        </TableContainer> */}
      </div>
    </div>
  );
}
