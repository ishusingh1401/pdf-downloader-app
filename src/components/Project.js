import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import Pdf from "react-to-pdf";
import { Button, Grid } from "@material-ui/core";

const ref = React.createRef();

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProjectData: [],
    };
  }

  componentDidMount() {
    axios.get("./projectData.json").then((response) => {
      console.log(response.data);

      this.setState({
        ProjectData: [response.data],
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
                Project Data
              </TableCell>
            </TableRow>
          </TableHead>
          {this.state.ProjectData.map((p, index) => {
            return (
              <TableBody>
                <TableRow>
                  <TableCell align="center">ProjectID:</TableCell>
                  <TableCell align="center">{p.projectID}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Project Name:</TableCell>
                  <TableCell align="center">{p.projectName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Budget:</TableCell>
                  <TableCell align="center">{p.budget}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">End Date:</TableCell>
                  <TableCell align="center">{p.endDate}</TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
        <div>
          <Grid container justify="center">
            <Pdf targetRef={ref} filename="ProjectData.pdf">
              {({ toPdf }) => (
                <Button color="primary" variant="contained" onClick={toPdf}>
                  Save Poject Data(PDF File)
                </Button>
              )}
            </Pdf>
          </Grid>
        </div>
      </TableContainer>
    );
  }
}

export default Project;
