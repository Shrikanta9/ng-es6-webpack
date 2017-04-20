import Logger from 'js-logger';
import alertify from 'alertify.js';

export class LoginController {
  constructor() {
    const logger = Logger.get('LoginController');
    logger.debug('LoginController Initialized');
  }

  login() {
    alertify.success('logged in successfully!');
  }
}
