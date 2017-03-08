'use strict';

/**
 * @ngdoc function
 * @name spotifyExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyExampleApp
 */
angular.module('spotifyExampleApp')
  .controller('MainCtrl', ['$scope', '$resource', '$rootScope', function ($scope, $resource, $rootScope) {
    $scope.searchAlbum = "";
    $scope.result = [];
    var Spotify = $resource('https://api.spotify.com/v1/search', {});

    $scope.search = function(event) {
      Spotify.get({q: $scope.searchAlbum , type: 'album'}, function(res) {
        $scope.result = res.albums.items;
        console.log($scope.result[0]);
      });
    }
  }]);
