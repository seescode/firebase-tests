'use strict';

(function () {
    angular.module('starter')
      .controller('EightController', function ($scope, $firebaseArray) {
        var vm = this;

        var messagesRef = new Firebase("https://radiant-torch-6366.firebaseio.com/eight");

        $scope.messages = $firebaseArray(messagesRef);

        $scope.data = {};

        var toUpdate = false;
        var updateItem = null;

        vm.addItem = function() {
          console.log($scope.data.newMessage);

          if (toUpdate === false)
          {
            $scope.messages.$add( { msg : $scope.data.newMessage }).then(function(ref) {
              $scope.data.newMessage = "";
              toUpdate = false;
            });
          } else {
            $scope.messages.$save(updateItem).then(function(ref) {
              $scope.data.newMessage = "";
              toUpdate = false;
            });
          }


        };

        vm.showItem = function(msg) {
          $scope.data.newMessage = msg.msg;
          toUpdate = true;
          updateItem = msg;
        };

      });
})();
