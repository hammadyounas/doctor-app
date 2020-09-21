import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/components/login/login'
import Home from './pages/components/home/home'
import Auth from './auth'

const Router = props => (
  <Switch>
    <Route exact path='/'>
      <Redirect to='/home' />
    </Route>
    <Route path='/login' component={Login} />
    <PrivateRoute path='/home' component={Home} />
  </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
    }
  />
)

export default Router
