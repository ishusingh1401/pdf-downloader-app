import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Grid } from "@material-ui/core";
import Pdf from "react-to-pdf";
import axios from "axios";

const ref = React.createRef();

export class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StudentData: [],
    };
  }

  componentDidMount() {
    axios.get("./studentData.json").then((response) => {
      console.log(response.data);

      this.setState({
        StudentData: [response.data],
      });
    });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table" ref={ref}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Sudent Data
              </TableCell>
            </TableRow>
          </TableHead>

          {this.state.StudentData.map((p, index) => {
            return (
              <TableBody>
                <TableRow>
                  <TableCell align="center">SudentID:</TableCell>
                  <TableCell align="center">{p.studentID}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Student Name:</TableCell>
                  <TableCell align="center">{p.studentName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Class:</TableCell>
                  <TableCell align="center">{p.class}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Marks:</TableCell>
                  <TableCell align="center">{p.marks}</TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
        <div>
          <Grid container justify="center">
            <Pdf targetRef={ref} filename="StudentData.pdf">
              {({ toPdf }) => (
                <Button color="primary" variant="contained" onClick={toPdf}>
                  Save Student Data(PDF File)
                </Button>
              )}
            </Pdf>
          </Grid>
        </div>
      </TableContainer>
    );
  }
}

export default Student;
