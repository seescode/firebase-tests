'use strict';

(function () {
    angular.module('starter')
      .controller('NineController', function ($scope, $firebaseObject) {
          var vm = this;

          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/");

          var syncObject = $firebaseObject(ref);

          //It looks like we can name "data" to whatever we want.  It doesn't
          //effect any of the key/value names on firebase.
          syncObject.$bindTo($scope, "data");
      });
})();
