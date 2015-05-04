'use strict';

(function () {
    angular.module('starter')
      .controller('9Controller', function ($scope, $firebaseObject, $firebaseArray) {
          var vm = this;

          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/nine");
          var syncObject = $firebaseObject(ref);


          //It looks like we can name "data" to whatever we want.  It doesn't
          //effect any of the key/value names on firebase.
          syncObject.$bindTo($scope, "data");


          vm.addItem = function() {
              var refArray = new Firebase("https://radiant-torch-6366.firebaseio.com/nine/array");
              $scope.array = $firebaseArray(refArray);

              $scope.array.$add(1);
          };
      });
})();
