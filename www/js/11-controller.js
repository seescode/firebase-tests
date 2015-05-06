'use strict';

(function () {
  angular.module('starter')
    .controller('11Controller', function ($scope, $firebaseObject, $firebaseAuth) {
    var vm = this;

    var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/11");
    var auth = $firebaseAuth(ref);
    var syncObject = null;

    var updateStatus = function () {
      var authData = auth.$getAuth();

      if (authData) {                
        $scope.uid = authData.uid;
        ref = new Firebase("https://radiant-torch-6366.firebaseio.com/11/" + authData.uid);
        
        if (syncObject != null) {
          syncObject.$destroy();
        }
        
        syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, "data");
      } else {
        $scope.uid = "";
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

    
    updateStatus();
  });
})();
