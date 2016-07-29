require('angular')
var inputController = require('./controllers/input')
var translateService = require('./services/translate')

var app = angular.module('app', [])
app.factory('Translate', ['$http', translateService])
app.controller('InputController', ['$scope', 'Translate', inputController])