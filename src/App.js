import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Container from "@material-ui/core/Container";

import { MyAppBar } from "./MyAppBar";
import { Covid19Measures } from "./Covid19Measures";

function App() {
  const MyAppBarWithRouter = withRouter(MyAppBar);

  return (
    <div className="App">
      <MyAppBarWithRouter />
      <Container fixed="fixed">
        <Switch>
          <Route exact path="/" component={Covid19Measures} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
