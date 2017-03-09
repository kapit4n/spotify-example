'use strict';

/**
 * @ngdoc function
 * @name spotifyExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyExampleApp
 */
angular.module('spotifyExampleApp')
  .controller('MainCtrl', ['$scope', '$resource', '$rootScope', '$location', function ($scope, $resource, $rootScope, $location) {
    $scope.searchAlbum = "";
    $scope.result = [];
    var Spotify = $resource('https://api.spotify.com/v1/search', {});

    $scope.search = function(event) {
      if ($scope.searchAlbum.length > 1) {
        Spotify.get({q: $scope.searchAlbum , type: 'album'}, function(res) {
          $scope.result = res.albums.items;
        });
      }
    }

    $scope.navigateTo = function(album) {
      $rootScope.uriArtist = 'https://embed.spotify.com/?uri=' + album.artists[0].uri;
      $location.path('play/');
    }

    $scope.navigateToArtist = function(artist) {
      $rootScope.uriArtist = 'https://embed.spotify.com/?uri=' + artist.uri;
      $location.path('play/');
    }
  }]);
