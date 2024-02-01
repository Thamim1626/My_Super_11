import { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
