// this is the PARENT ; all others are Childs
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Router, Route, Link } from "../App/router-native"; // new route mechanism

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignupPage from '../Signup';
import LoginPage from '../Login';
import LogoutPage from '../Logout';
import HomePage from '../Home';
import AboutPage from '../About'; 

import Styles from '../../common/style';
import * as ROUTES from '../../common/routes';
import { withAuthenticationAs } from '../../common/Session'; 

const LayoutContainer = () => (
  <Router>
    <View style={Styles.container}>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} /> 
      <Route path={ROUTES.LOGIN} component={LoginPage} /> 
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.LOGOUT} component={LogoutPage} /> 
      <Route path={ROUTES.SIGNUP} component={SignupPage} />
    </View>
  </Router>
);

export default withAuthenticationAs(LayoutContainer); // ok
