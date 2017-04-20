import Logger from 'js-logger';
import alertify from 'alertify.js';

export default class NavbarController {
  constructor() {
    'ngInject';
    const logger = Logger.get('NavbarController');
    logger.info('Initialised NavbarController');
  }
}
