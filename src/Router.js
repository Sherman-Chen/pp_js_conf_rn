import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import InitialPage from './components/InitialPage';
import Swiper from './components/swiperFile';
import List from './components/List';

const RouterComponent = () =>
  <Router>
    <Scene key="root">
      <Scene key="initial" component={InitialPage} hideNavBar initial />
      <Scene key="card" component={Swiper} hideNavBar />
      <Scene key="list" component={List} hideNavBar />
    </Scene>
  </Router>;

export default RouterComponent;
