import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import List from "../src/components/list";

class App2 extends Component {
  renderRouter() {
    // const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      // <Provider store={store}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/list" component={List} />
      </Switch>
      // </Provider>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App2;
