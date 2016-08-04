var input = function($scope, Translate, $routeParams, $location) {
  $scope.message = '';
  
  $scope.submit = function() {
      var message = $scope.message;
      $location.path('/reverse/' + message.replace(/ /g, '-'));
  }

  $scope.reverseMessage = function(message) {
    Translate.reverse(message, function(result) {
      $scope.reversedMessage = result;
    });
  }
}

module.exports = input;