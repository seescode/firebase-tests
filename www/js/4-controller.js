'use strict';

(function () {
    angular.module('starter')
      .controller('4Controller', function ($scope, $firebaseObject) {
          var vm = this;

          var ref = new Firebase("https://radiant-torch-6366.firebaseio.com/four");

          //var profileRef = ref.child('username');

          var obj = $firebaseObject(ref);

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

          vm.incrementItem = function() {
            if (obj.x != null) {
              obj.x++;
            }
            else {
              obj.x = 1;
            }

            obj.$save().then(function(ref) {
              ref.key() === obj.$id; // true
            }, function(error) {
              console.log("Error:", error);
            });

          };

      });
})();
