import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import Header from "./navigation/header";
import Footer from "./navigation/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Qualify from "./pages/qualify";
import Plan from "./pages/plan";
import NoMatch from "./pages/no-match";

library.add(fab, faSignOutAlt);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userStatus: false
    }
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/qualify" component={Qualify} />
              <Route path="/plan" component={Plan} />
              <Route component={NoMatch} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
