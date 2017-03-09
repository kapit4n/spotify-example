'use strict';

/**
 * @ngdoc function
 * @name spotifyExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotifyExampleApp
 */
angular.module('spotifyExampleApp')
  .controller('AboutCtrl', ['$scope', '$resource', '$rootScope', '$sce', '$location', function ($scope, $resource, $rootScope, $sce, $location) {
    $scope.trustSrc = function(src) {
      if (!src) {
        $location.path("");
      }
      return $sce.trustAsResourceUrl(src);
    }
  }]);
