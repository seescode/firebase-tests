'use strict';

(function () {
    angular.module('starter')
      .controller('5Controller', function ($scope, $firebaseObject) {
          var vm = this;

          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/five");

          var profileRef = ref.child('username');

          var obj = $firebaseObject(profileRef);

          vm.updateItem = function() {

            //Note that this assignment has to happen here.  It can't
            //happen above.
            obj.foo = { bar : 1};

            obj.$save().then(function(ref) {
              ref.key() === obj.$id; // true
            }, function(error) {
              console.log("Error:", error);
            });
          };

          vm.removeItem = function() {
            obj.$remove().then(function(ref) {
            // data has been deleted locally and in Firebase
            }, function(error) {
              console.log("Error:", error);
            });
          }

        }
)})();
