'use strict';

(function () {
    angular.module('starter')
      .controller('TwoController', function ($scope, $firebaseObject) {

          //Note that one-controller does not reference /one but uses the base url.
          //We use /two here like this in order to save an object to key "two".
          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/two");

          var syncObject = $firebaseObject(ref);
          syncObject.$bindTo($scope, "data");



      });
})();
