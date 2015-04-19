'use strict';

(function () {
    angular.module('starter')
      .controller('OneController', function () {
          var vm = this;

          vm.setItem = function() {
              alert('set');
          };

          vm.updateItem = function() {
              alert('update');
          };

      });
})();
