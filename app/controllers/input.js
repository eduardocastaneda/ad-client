var input = function($scope, Reverse, $routeParams, $location) {
  $scope.message = '';
  
  $scope.submit = function() {
      var message = $scope.message;
      $location.path('/reverse/' + message.replace(/ /g, '-'));
  }

  $scope.reverseMessage = function(message) {
    Reverse.message(message, function(result) {
      $scope.reversedMessage = result;
    });
  }
}

module.exports = input;