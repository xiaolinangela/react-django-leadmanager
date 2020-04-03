import React, { Component, Fragment } from "react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";

import { Provider } from "react-redux";
import store from "../store";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <AlertProvider template={AlertTemplate}>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </AlertProvider>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
