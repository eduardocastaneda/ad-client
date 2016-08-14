'use strict';

require('angular');
require('angular-route');
var homeController = require('./controllers/home');
var reverseController = require('./controllers/reverse');
var reverseService = require('./services/reverse');
var listService = require('./services/list');
var reverseFormDirective = require('./directives/reverse-form');
var config = require('./config.js');

angular.module('config', []).constant('config', config);
var app = angular.module('app', ['ngRoute', 'config']);

app.factory('Reverse', ['$http', 'config', reverseService]);
app.factory('List', ['$http', 'config', listService]);

app.directive('reverseForm', ['Reverse', '$location', reverseFormDirective]);

app.controller('HomeCtrl', ['$scope', '$routeParams', homeController]);
app.controller('ReverseCtrl', ['$scope', 'Reverse', 'List', '$routeParams', reverseController]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/reverse/:message', {
      templateUrl: '/views/reverse.html',
      controller: 'ReverseCtrl'
    });
  $routeProvider.otherwise({
      redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}]);
