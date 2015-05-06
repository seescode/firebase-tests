'use strict';

(function () {
  angular.module('starter')
    .controller('12Controller', function ($scope, $firebaseObject) {
        var vm = this;

        var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/11/google%3A102856089771803312289");

        var syncObject = $firebaseObject(ref);

        //It looks like we can name "data" to whatever we want.  It doesn't
        //effect any of the key/value names on firebase.
        syncObject.$bindTo($scope, "zodd");
  });
})();
