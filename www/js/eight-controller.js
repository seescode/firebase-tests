'use strict';

(function () {
    angular.module('starter')
      .controller('EightController', function ($scope, $firebaseArray) {
        var vm = this;

        var messagesRef = new Firebase("https://radiant-torch-6366.firebaseio.com/eight");

        $scope.messages = $firebaseArray(messagesRef);

        $scope.data = {};

        var updateIndex = null;

        vm.updateItem = function() {
          $scope.messages[updateIndex].msg = $scope.data.message;
          $scope.messages.$save(updateIndex).then(function(ref) {
            $scope.data.message = "";
          });
        };

        vm.showItem = function(msg, index) {
          $scope.data.message = msg.msg;
          updateIndex = index;
        };

      });
})();
