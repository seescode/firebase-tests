'use strict';

(function () {
    angular.module('starter')
      .controller('7Controller', function ($scope, $firebaseArray) {
        var vm = this;

        var messagesRef = new Firebase("https://radiant-torch-6366.firebaseio.com/seven");
        $scope.messages = $firebaseArray(messagesRef);

        $scope.data = {};

        vm.addItem = function() {
          console.log($scope.data.newMessage);
          $scope.messages.$add( { msg : $scope.data.newMessage }).then(function(ref) {
            $scope.data.newMessage = "";
          });
        };

        vm.deleteItem = function(msg) {
          $scope.messages.$remove(msg);
        };

      });
})();
