import React from "react";
import { PureComponent } from "react";
import { withStyles, styled } from "@material-ui/core/styles";
import { compose, positions, spacing, palette } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MaterialTable from "material-table";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import Papa from "papaparse";
import { Chart } from "react-google-charts";

import { INDICATORS, COUNTRIES } from "./catalog.js";

const useStyles = () => ({
  root: {
    backgroundColor: "eae7dc"
  }
});

export class Covid19Measures extends PureComponent {
  state = {
    measuresCollection: [],
    selectedCountry: "Serbia",
    selectedNotesTab: 0
  };

  componentDidMount() {
    this.retrieveCovid19Measures();
  }

  retrieveCovid19Measures() {
    const url =
      "https://covid19opendatabucket.s3.us-east-2.amazonaws.com/MeasuresData.csv";

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "text/csv",
        "Content-Type": "text/csv"
      }
    })
      .then(function(response) {
        return response.text();
      })
      .then(
        function(response) {
          this.setState({
            measuresCollection: Papa.parse(response, { header: true }).data
          });
        }.bind(this)
      );
  }

  renderEventList(measures) {
    const { selectedNotesTab } = this.state;
    const events = measures
      .filter(function(measure, index, array) {
        return (
          index === 0 ||
          measure[INDICATORS[selectedNotesTab].scaleColumnName] !==
            array[index - 1][INDICATORS[selectedNotesTab].scaleColumnName] ||
          (measure[INDICATORS[selectedNotesTab].notesColumnName] !== "" &&
            measure[INDICATORS[selectedNotesTab].notesColumnName] !==
              array[index - 1][INDICATORS[selectedNotesTab].notesColumnName])
        );
      })
      .map(function(event) {
        return {
          Date:
            event.Date.substring(6, 8) +
            "." +
            event.Date.substring(4, 6) +
            "." +
            event.Date.substring(0, 4) +
            ".",
          Scale:
            INDICATORS[selectedNotesTab].scale[
              event[INDICATORS[selectedNotesTab].scaleColumnName]
            ],
          Note: event[INDICATORS[selectedNotesTab].notesColumnName],
          SourceUrl: event[INDICATORS[selectedNotesTab].notesColumnName].match(
            /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
            "<a href='$1'>$1</a>"
          )
        };
      });

    return (
      <MaterialTable
        columns={[
          {
            title: "Date",
            field: "Date",
            width: 10
          },
          {
            title: "State of the measure",
            field: "Scale",
            width: 15
          },
          {
            title: "Note",
            field: "Note",
            width: 75
          }
        ]}
        data={events}
        actions={[
          rowData => ({
            icon: "pageview",
            iconProps: {
              color: "action",
              fontSize: "large"
            },
            tooltip: "Read Source",
            onClick: (event, rowData) => window.open(rowData.SourceUrl),
            disabled: rowData.SourceUrl === null
          })
        ]}
        options={{
          toolbar: false,
          headerStyle: {
            backgroundColor: "#d3d3d3",
            color: "#000"
          },
          paging: false,
          sorting: false,
          rowStyle: x => {
            if (x.tableData.id % 2) {
              return { backgroundColor: "rgba(50,50,50,0.1)" };
            }
          },
          actionsColumnIndex: -1
        }}
        localization={{
          header: {
            actions: "Media Source"
          }
        }}
        style={{
          background: "rgba(0,0,0,0)"
        }}
      />
    );
  }

  renderEvents(measures) {
    const { selectedNotesTab } = this.state;
    const tabs = [];
    for (let i = 0; i < INDICATORS.length; i++) {
      tabs.push(
        <Tab
          key={i}
          label={INDICATORS[i].name}
          id={i}
          onClick={event => {
            this.setState({
              selectedNotesTab: Number(event.target.offsetParent.id)
            });
          }}
        />
      );
    }
    const tabPanels = [];
    for (let i = 0; i < INDICATORS.length; i++) {
      tabPanels.push(
        <div>
          {selectedNotesTab === i && (
            <Box p={3}>{this.renderEventList(measures)}</Box>
          )}
        </div>
      );
    }

    return (
      <div>
        <Tabs value={selectedNotesTab} variant="fullWidth">
          {tabs}
        </Tabs>
        {tabPanels}
      </div>
    );
  }

  renderTimeline(measures) {
    let timelineData = [
      [
        { type: "string", id: "Measure" },
        { type: "string", id: "Name" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" }
      ]
    ];

    for (let i = 0; i < INDICATORS.length; i++) {
      const scaleColumnName = INDICATORS[i].scaleColumnName;
      let S_data = [
        [
          INDICATORS[i].id + " - " + INDICATORS[i].name,
          INDICATORS[i].scale[0],
          new Date(2020, 0, 1),
          new Date()
        ]
      ];
      for (let j = 1; j < measures.length; j++) {
        if (measures[j][scaleColumnName] !== measures[j - 1][scaleColumnName]) {
          S_data[S_data.length - 1][3] = new Date(
            2020,
            measures[j].Date.substring(4, 6) - 1,
            measures[j].Date.substring(6, 8)
          );
          S_data.push([
            INDICATORS[i].id + " - " + INDICATORS[i].name,
            INDICATORS[i].scale[measures[j][scaleColumnName]],
            new Date(
              2020,
              measures[j].Date.substring(4, 6) - 1,
              measures[j].Date.substring(6, 8)
            ),
            new Date()
          ]);
        }
      }
      timelineData = timelineData.concat(S_data);
    }

    return (
      <Chart
        width={"100%"}
        height={"350px"}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={timelineData}
        options={{
          colors: ["#b2d8d8", "#66b2b2", "#008080", "#006666", "#004c4c"],
          backgroundColor: '#ffd',
        }}
        rootProps={{ "data-testid": "7" }}
      />
    );
  }

  countrySelect(selectedCountry) {
    const StyledFormControl = withStyles({
      root: {
        width: "40%",
        "text-align": "left"
      }
    })(FormControl);

    return (
      <StyledFormControl variant="outlined">
        <InputLabel id="country-select-label">Select country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          onChange={event => {
            this.setState({ selectedCountry: event.target.value });
          }}
          label="Select country"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {COUNTRIES.map(function(country) {
            return <MenuItem value={country}>{country}</MenuItem>;
          })}
        </Select>
      </StyledFormControl>
    );
  }

  renderCountry() {
    const { measuresCollection, selectedCountry } = this.state;

    const filteredMeasures = measuresCollection.filter(function(measure) {
      return measure.CountryName === selectedCountry;
    });

    const StyledPaper = withStyles({
      root: {
        padding: "30px",
        "text-align": "left"
      }
    })(Paper);

    return (
      <StyledPaper elevation={3}>
        {this.countrySelect(selectedCountry)}
        <h3>Measures related to public gatherings - Timeline</h3>
        {this.renderTimeline(filteredMeasures)}
        <h3>Notes - Changes - Media sources</h3>
        {this.renderEvents(filteredMeasures)}
      </StyledPaper>
    );
  }

  render() {
    const { measuresCollection } = this.state;
    const measuresExists =
      measuresCollection != null && measuresCollection.length > 0;

    const CitationPaper = withStyles({
      root: {
        padding: "20px 150px 20px 150px",
        backgroundColor: "#eae7dc"
      }
    })(Paper);

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <h2>COVID-19 Government Measures</h2>
        </Grid>
        <Grid item xs={12}>
          <CitationPaper elevation={3}>
            Data source:
            <br />
            <a
              href="https://www.bsg.ox.ac.uk/research/research-projects/coronavirus-government-response-tracker"
              target="blank"
              style={{ cursor: "pointer" }}
            >
              Hale, Thomas, Sam Webster, Anna Petherick, Toby Phillips, and
              Beatriz Kira (2020). Oxford COVID-19 Government Response Tracker,
              Blavatnik School of Government
            </a>
          </CitationPaper>
        </Grid>
        <Grid item xs={12}>
          {measuresExists && this.renderCountry()}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Covid19Measures);
