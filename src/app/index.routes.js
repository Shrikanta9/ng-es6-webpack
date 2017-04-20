// routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  '$ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'LC',
      template: require('./login/login.html')
    })
    .state('authfailed', {
      url: '/login/failed',
      template: '<div class="row text-center alert alert-danger" ><strong>Failed to Authenticate.</string></div>'
    })
    .state('home', {
      url: '',
      template: require('./components/navbar/navbar.html'),
      controller: 'NavbarController',
      controllerAs: 'NC',
      abstract: true,
      data: {
        title: '',
        meta: {
          description: '',
          keyword: ''
        }
      }
    })
    .state('home.dashboard', {
      url: '/dashboard',
      template: require('./dashboard/dashboard.html'),
      controller: 'DashboardController',
      controllerAs: 'DC',
      data: {
        title: 'Dashboard | Profile | Shree.com',
        navbar: {
          header: 'Dashboard',
          breadcrumbs: ['Home']
        },
        meta: {
          description: '',
          keyword: ''
        }
      }
    });

  $urlRouterProvider.otherwise('/dashboard');
  $locationProvider.html5Mode(true);
}
