import app from './app';

describe('myApp', () => {

  describe('LoginController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(myApp);

      angular.mock.inject(($controller) => {
        ctrl = $controller('LoginController', {});
      });
    });

    it('should contain the login to website', () => {
      expect(ctrl.message).toBe('Login called');
    });
  });
});
