import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomeComponent from './components/homeComponent';
import MenuComponent from './components/menuComponent';
import ViewVideosComponent from './components/viewVideosComponent';
import EditVideosComponent from './components/editVideosComponent';
import RemoveVideosComponent from './components/removeVideosComponent'
class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <MenuComponent />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/edit" exact component={EditVideosComponent} />
            <Route path="/view" exact component={ViewVideosComponent} />
            <Route path="/remove" exact component={RemoveVideosComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
