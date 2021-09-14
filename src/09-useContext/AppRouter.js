import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>

          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="/"/>

        </Switch>
      </div>
    </Router>
  )
}
