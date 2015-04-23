'use strict';

(function () {
    angular.module('starter')
      .controller('SixController', function ($scope, $firebaseArray) {
          var vm = this;

          var messagesRef = new Firebase("https://radiant-torch-6366.firebaseio.com/six");
          $scope.messages = $firebaseArray(messagesRef);

          //You have to use an object and not a string.  Otherwise the 2 way binding
          //doesn't work.
          $scope.data = {};

          vm.addItem = function() {

            console.log($scope.data.newMessage);
            //$scope.messages.$add( { msg : $scope.data.newMessage }).then(function(ref) {

            $scope.messages.$add($scope.data.newMessage).then(function(ref) {
              $scope.data.newMessage = "";
            });
          };
      });
})();
