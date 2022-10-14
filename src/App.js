import React from "react";
import { Grid, Button } from "@material-ui/core";
import Project from "./components/Project";
import Student from "./components/Student";
import EmailSender from "./components/EmailSender"

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          {" "}
          <Project />
        </Grid>
        <Grid item sm={6}>
          {" "}
          <Student />
        </Grid>
      </Grid>
      <div>
        <Grid container justify="center">
          <Button color="primary" variant="contained">
            EMAIL PDF
          </Button>
        </Grid>
      </div>
    </div>
  );
}

export default App;
