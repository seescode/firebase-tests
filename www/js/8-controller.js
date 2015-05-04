'use strict';

(function () {
    angular.module('starter')
        .controller('8Controller', function ($scope, $firebaseArray) {
        var vm = this;

        var messagesRef = new Firebase("https://radiant-torch-6366.firebaseio.com/eight");

        $scope.messages = $firebaseArray(messagesRef);

        $scope.data = {};

        var updateIndex = null;

        vm.updateItem = function () {

            if (updateIndex == null) {
                alert('Must select an item first before you can update it');
            } else {
                $scope.messages[updateIndex].msg = $scope.data.message;
                $scope.messages.$save(updateIndex).then(function (ref) {
                    $scope.data.message = "";
                });
            }
        };

        vm.showItem = function (msg, index) {
            $scope.data.message = msg.msg;
            updateIndex = index;
        };

    });
})();
