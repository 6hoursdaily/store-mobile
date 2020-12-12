angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('storeE', {
    url: '/',
    templateUrl: 'templates/storeE.html',
    controller: 'storeECtrl'
  })

  .state('dashboard', {
    url: '/home',
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

  .state('products', {
    url: '/products',
    templateUrl: 'templates/products.html',
    controller: 'productsCtrl'
  })

  .state('newProductCategory', {
    url: '/categories/new',
    templateUrl: 'templates/newProductCategory.html',
    controller: 'newProductCategoryCtrl'
  })

  .state('updateCategory', {
    url: '/category/1/edit',
    templateUrl: 'templates/updateCategory.html',
    controller: 'updateCategoryCtrl'
  })

  .state('blueberryProducts', {
    url: '/categories/1',
    templateUrl: 'templates/blueberryProducts.html',
    controller: 'blueberryProductsCtrl'
  })

  .state('addProduct', {
    url: '/categories/1/products/new',
    templateUrl: 'templates/addProduct.html',
    controller: 'addProductCtrl'
  })

  .state('updateProduct', {
    url: '/category/1/products/1',
    templateUrl: 'templates/updateProduct.html',
    controller: 'updateProductCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('payments', {
    url: '/payments',
    templateUrl: 'templates/payments.html',
    controller: 'paymentsCtrl'
  })

  .state('setupNewPayment', {
    url: '/payments/new',
    templateUrl: 'templates/setupNewPayment.html',
    controller: 'setupNewPaymentCtrl'
  })

  .state('updatePayment', {
    url: '/payments/2/edit',
    templateUrl: 'templates/updatePayment.html',
    controller: 'updatePaymentCtrl'
  })

  .state('delivery', {
    url: '/fulfillments',
    templateUrl: 'templates/delivery.html',
    controller: 'deliveryCtrl'
  })

  .state('messages', {
    url: '/messages',
    templateUrl: 'templates/messages.html',
    controller: 'messagesCtrl'
  })

  .state('juliusFrancisco', {
    url: '/messages/contact/1',
    templateUrl: 'templates/juliusFrancisco.html',
    controller: 'juliusFranciscoCtrl'
  })

$urlRouterProvider.otherwise('/')


});