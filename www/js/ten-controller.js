'use strict';

(function () {
    angular.module('starter')
      .controller('TenController', function ($scope, $firebaseObject, $firebaseAuth) {
          var vm = this;

          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/ten");
          
          var auth = $firebaseAuth(ref);
          
          // login with Facebook
          auth.$authWithOAuthPopup("google").then(function(authData) {
            console.log("Logged in as:", authData.uid);
            $scope.loggedIn = true;
          }).catch(function(error) {
            console.log("Authentication failed:", error);
          });
          


          var syncObject = $firebaseObject(ref);

          //It looks like we can name "data" to whatever we want.  It doesn't
          //effect any of the key/value names on firebase.
          syncObject.$bindTo($scope, "data");
      });
})();
