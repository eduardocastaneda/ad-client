require('angular')
var InputController = require('./controllers/InputController')

var app = angular.module('app', [])
app.controller('InputController', ['$scope', InputController])