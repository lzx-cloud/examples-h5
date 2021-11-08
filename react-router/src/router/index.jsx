import React, { Component } from 'react';
import { Route, Switch, Redirect, HashRouter, withRouter } from "react-router-dom";

import Config from './config'

class Router extends Component {

  generateRoute(ele) {
    if (ele.children) {
      if (ele.component) {
        return (
          <Route key={ele.name} path={ele.path} render={() => (
            <ele.component>
              {
                ele.children.map((item) => {
                  return this.generateRoute(item)
                })
              }
            </ele.component>
          )}>
          </Route>
        )
      } else {
        return (
          <Route key={ele.name} render={() => (
            ele.children.map((item) => {
              return this.generateRoute(item)
            })
          )}>
          </Route>
        )
  
      }
  
    }
  
    if (ele.redirect) {
      return <Route exact key={ele.name} path={ele.path} render={
        () => (
          <Redirect to={ele.redirect} />)}>
      </Route>
    } else {
      return <Route exact key={ele.name} path={ele.path} component={ele.component} />
    }
  
  }

  render() {
    return (
      <HashRouter>
        <Switch>
  
          {
            Config.map(item => {
              return this.generateRoute(item)
            })
          }

        </Switch>
      </HashRouter>
    );
  }
}

export default withRouter(Router);