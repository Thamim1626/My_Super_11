import { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Subscription from "./Component/Subscription";
import Home from "./Component/Home";
import "./App.css";
import Login from "./Component/Login";
import AdminPanel from "./Component/AdminPanel";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscription" component={Subscription} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={AdminPanel} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
