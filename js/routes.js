angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('base', {
    url: '/',
    templateUrl: 'templates/base.html',
    controller: 'baseCtrl'
  })

  .state('dashboard', {
    url: '/page2',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('orders', {
    url: '/orders',
    templateUrl: 'templates/orders.html',
    controller: 'ordersCtrl'
  })

  .state('order001', {
    url: '/orders/0001',
    templateUrl: 'templates/order001.html',
    controller: 'order001Ctrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/')


});