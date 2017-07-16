import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import InitialPage from './components/InitialPage';


const RouterComponent = () =>
    <Router>
    <Scene key="root">
    <Scene key="login" component={InitialPage} hideNavBar initial />
    </Scene>
    </Router>
;

export default RouterComponent;
