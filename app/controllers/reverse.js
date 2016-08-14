'use strict';

var reverse = function ($scope, Reverse, List, $routeParams) {
  $scope.headerMessage = $routeParams.message.replace(/-/g, ' ');

  List.get(function (result) {
    $scope.relatedItems = result;
  })

  Reverse.message($scope.headerMessage, function (result) {
    $scope.headerReversedMessage = result;
  });
}

module.exports = reverse;
