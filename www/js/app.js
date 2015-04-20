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
  .state('one', {
    url: '/one',
    templateUrl: 'templates/one.html',
    controller: 'OneController as vm'
  })
  .state('two', {
    url: '/two',
    templateUrl: 'templates/two.html',
    controller: 'TwoController as vm'
  })
  .state('three', {
    url: '/three',
    templateUrl: 'templates/three.html',
    controller: 'ThreeController as vm'
  })
  .state('four', {
    url: '/four',
    templateUrl: 'templates/four.html',
    controller: 'FourController as vm'
  })
  .state('five', {
    url: '/five',
    templateUrl: 'templates/five.html',
    controller: 'FiveController as vm'
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
