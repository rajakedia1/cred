import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Pages from './components/pages/pages';

function Main() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/" exact component={Pages}/>
					<Route path="/browse" component={Pages}/>
					<Route path="/product" component={Pages}/>
					<Route path="/search" component={Pages}/>
					<Route path="/cred" component={Pages}/>
        </Switch> */}
				<Switch>
          <Route path="/cred/" exact component={Pages}/>
					<Route path="/cred/browse" component={Pages}/>
					<Route path="/cred/product" component={Pages}/>
					<Route path="/cred/search" component={Pages}/>
					<Route path="/cred/cred" component={Pages}/>
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
