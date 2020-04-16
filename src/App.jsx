/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import NoMatch from './views/not-found';

// import { withAuthenticator } from 'aws-amplify-react';

import { routes } from './routes';

function App() {
  return (
    <Router basename="/">
      <div>
        <nav className="navbar mb-3 navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#/">
            App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {routes.map(({ path, name, hidden }) =>
                hidden ? (
                  ''
                ) : (
                  <li key={path} className="nav-item">
                    <NavLink exact={path === '#/'} className="nav-link" to={path}>
                      {name}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
        <Switch>
          {routes.map(({ path, component }) => (
            <Route exact={path === '/'} key={path} path={path} component={component} />
          ))}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// export default withAuthenticator(App, { includeGreetings: true });
export default App;
