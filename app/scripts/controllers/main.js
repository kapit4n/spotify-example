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
    $scope.result = [{name: "hello"}];
    var Spotify = $resource('https://api.spotify.com/v1/search', {});

    $scope.search = function() {
      Spotify.get({q: $scope.searchAlbum, type: 'album'}, function(res) {
        $scope.result = res.albums.items;
      });
    }
  }]);
