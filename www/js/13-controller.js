'use strict';

(function () {
  angular.module('starter')
    .controller('13Controller', function ($scope, $firebaseObject, $firebaseAuth) {
    var vm = this;

    var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/13");

    var auth = $firebaseAuth(ref);

    var updateStatus = function () {
      var authData = auth.$getAuth();

      if (authData) {
        $scope.uid = authData.uid;
        $scope.provider = authData.provider;
        $scope.auth = authData.auth;
        $scope.expires = authData.expires;
        console.log(authData)
      } else {
        $scope.uid = "Not logged in";
        $scope.provider = '';
        $scope.auth = '';
        $scope.expires = '';
      }
    };
    
    vm.login = function () {           
      // login with Facebook
      auth.$authWithOAuthPopup("google").then(function (authData) {
        console.log("Logged in as:", authData.uid);
        $scope.loggedIn = true;
        updateStatus();
      }).catch(function (error) {
        console.log("Authentication failed:", error);
      });
    }

    vm.logout = function () {
      auth.$unauth();
      updateStatus();      
    }

    var syncObject = $firebaseObject(ref);

    //It looks like we can name "data" to whatever we want.  It doesn't
    //effect any of the key/value names on firebase.
    syncObject.$bindTo($scope, "data");
    
    updateStatus();
  });
})();
