require('angular')
require('angular-route')
var inputController = require('./controllers/input')
var reverseController = require('./controllers/reverse')
var translateService = require('./services/translate')

var app = angular.module('app', ['ngRoute'])

app.factory('Translate', ['$http', translateService])

app.controller('InputController', ['$scope', 'Translate', '$routeParams', '$location', inputController])
app.controller('ReverseController', ['$scope', 'Translate', '$routeParams', '$location', reverseController])

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