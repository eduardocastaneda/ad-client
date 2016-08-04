require('angular')
require('angular-route')
var inputController = require('./controllers/input')
var reverseController = require('./controllers/reverse')
var reverseService = require('./services/reverse')
var listService = require('./services/list')

var app = angular.module('app', ['ngRoute'])

app.factory('Reverse', ['$http', reverseService])
app.factory('List', ['$http', listService])

app.controller('InputController', ['$scope', 'Reverse', '$routeParams', '$location', inputController])
app.controller('ReverseController', ['$scope', 'Reverse', 'List', '$routeParams', '$location', reverseController])

app.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/input.html',
      controller: 'InputController'
    })
    .when('/reverse/:message', {
      templateUrl: '/views/reverse.html',
      controller: 'ReverseController'
    });
  $routeProvider.otherwise({
      redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}]);