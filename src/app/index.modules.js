import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-sanitize';
import 'ngstorage';
import 'ng-material-floating-button/src/mfb-directive';
import 'sortablejs/ng-sortable';

import '../style/app.css';

import {
  LoginController
} from './login/login.controller';
import routerConfig from './index.routes';
import NavbarController from './components/navbar/navbar.controller';
import {
  DashboardController
} from './dashboard/dashboard.controller';

angular.module('myApp', ['ui.router',
  'ui.bootstrap',
  'ngStorage',
  'ng-mfb',
  'ngSanitize',
  'ng-sortable'])
  .config(routerConfig)
  .controller('LoginController', LoginController)
  .controller('DashboardController', DashboardController)
  .controller('NavbarController', NavbarController);
