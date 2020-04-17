import React from "react";
import { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = () => ({
  root: {
    backgroundColor: "eae7dc"
  }
});

export class Covid19Measures extends PureComponent {
  render() {
    const classes = useStyles();

    return (
      <div>
        <Grid
          container="container"
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item="item" xs={12}>
            <h2>COVID-19 Government Measures</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Covid19Measures);
