import Logger from 'js-logger';
import alertify from 'alertify.js';

export class DashboardController {
  constructor() {
    'ngInject';
    const logger = Logger.get('DashboardController');
    logger.info('Initialised Dashboard');
  }
}
