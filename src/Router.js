import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import InitialPage from './components/InitialPage';
import Swiper from './components/swiperFile';
import YelpCard from './components/YelpCard';



const RouterComponent = () =>
    <Router>
    <Scene key="root">
    <Scene key="input" component={InitialPage} hideNavBar initial />
    <Scene key="card" component={Swiper} hideNavBar />
    </Scene>
    </Router>
;

export default RouterComponent;
