import { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Subscription from "./Component/Subscription";
import Home from "./Component/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscription" component={Subscription} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
