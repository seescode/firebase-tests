'use strict';

(function () {
    angular.module('starter')
      .controller('SevenController', function ($scope, $firebaseArray) {
        var vm = this;

        var messagesRef = new Firebase("https://radiant-torch-6366.firebaseio.com/seven");

        // download the data from a Firebase ref into a (psuedo read-only) array
        // all server changes are applied in realtime
        $scope.messages = $firebaseArray(messagesRef);
        // create a query for the most recent 25 messages on the server
        //var query = messagesRef.orderByChild("timestamp").limitToLast(25);
        // the $firebaseArray service properly handles Firebase queries as well
        //$scope.filteredMessages = $firebaseArray(query);

        $scope.data = {};

        vm.addItem = function() {

          console.log($scope.data.newMessage);
          $scope.messages.$add( { msg : $scope.data.newMessage }).then(function(ref) {
            $scope.data.newMessage = "";
          });
        };
      });
})();
