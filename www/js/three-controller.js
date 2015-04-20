'use strict';

(function () {
    angular.module('starter')
      .controller('ThreeController', function ($scope, $firebaseObject) {
          var vm = this;

          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/three/cow/bell");

          var syncObject = $firebaseObject(ref);

          //It looks like we can name "data" to whatever we want.  It doesn't
          //effect any of the key/value names on firebase.
          syncObject.$bindTo($scope, "zodd");
      });
})();
