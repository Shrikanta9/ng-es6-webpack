import Logger from 'js-logger';
import alertify from 'alertify.js';

export default class NavbarController {
  constructor($localStorage) {
    'ngInject';
    const vm = this;
    vm.$localStorage = $localStorage;

    const logger = Logger.get('NavbarController');
    logger.info('Initialised NavbarController');

    vm.menu = [
      {
        name: 'Dashboard',
        state: 'home.dashboard',
        class: 'fa fa-dashboard',
        active: 'home.dashboard.**'
      }
    ];

  }

  toggleSidebar() {
    const vm = this;
    vm.toggle = !vm.toggle;
  }

  logout() {
    const vm = this;
    delete vm.$localStorage.me;
    delete vm.$localStorage.token;
    vm.$state.go('login');
  }

}
