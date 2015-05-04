// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/links.html'
  })
  .state('1', {
    url: '/1',
    templateUrl: 'templates/1.html',
    controller: '1Controller as vm'
  })
  .state('2', {
    url: '/2',
    templateUrl: 'templates/2.html',
    controller: '2Controller as vm'
  })
  .state('3', {
    url: '/3',
    templateUrl: 'templates/3.html',
    controller: '3Controller as vm'
  })
  .state('4', {
    url: '/4',
    templateUrl: 'templates/4.html',
    controller: '4Controller as vm'
  })
  .state('5', {
    url: '/5',
    templateUrl: 'templates/5.html',
    controller: '5Controller as vm'
  })
  .state('6', {
    url: '/6',
    templateUrl: 'templates/6.html',
    controller: '6Controller as vm'
  })
  .state('7', {
    url: '/7',
    templateUrl: 'templates/7.html',
    controller: '7Controller as vm'
  })
  .state('8', {
    url: '/8',
    templateUrl: 'templates/8.html',
    controller: '8Controller as vm'
  })
  .state('9', {
    url: '/9',
    templateUrl: 'templates/9.html',
    controller: '9Controller as vm'
  })
  .state('10', {
    url: '/10',
    templateUrl: 'templates/10.html',
    controller: '10Controller as vm'
  })
  .state('11', {
    url: '/11',
    templateUrl: 'templates/11.html',
    controller: '11Controller as vm'
  })
  .state('12', {
    url: '/12',
    templateUrl: 'templates/12.html',
    controller: '12Controller as vm'
  })
  .state('13', {
    url: '/13',
    templateUrl: 'templates/13.html',
    controller: '13Controller as vm'
  })
  .state('14', {
    url: '/14',
    templateUrl: 'templates/14.html',
    controller: '14Controller as vm'
  })
  .state('15', {
    url: '/15',
    templateUrl: 'templates/15.html',
    controller: '15Controller as vm'
  })


  $urlRouterProvider.otherwise('/')

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
