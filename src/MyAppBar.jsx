import React from "react";
import { PureComponent } from "react";

import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAppBar: {
      // Name of the rule
      colorPrimary: {
        // Some CSS
        backgroundColor: "#d8c3a5"
      }
    }
  }
});

export class MyAppBar extends PureComponent {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Container fixed="fixed">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h2>COVID-19 OPEN DATA</h2>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
}

export default MyAppBar;
