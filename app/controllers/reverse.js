var reverse = function($scope, Reverse, List, $routeParams, $location) {
  $scope.message = $routeParams.message.replace(/-/g, " ");
  $scope.relatedItems = 

  List.get(function(result){
    $scope.relatedItems = result;
  })

  Reverse.message($scope.message, function(result) {
    $scope.reversedMessage = result;
  });
  
  $scope.submit = function() {
      var message = $scope.newMessage;
      $location.path('/reverse/' + message.replace(/ /g, '-'));
  }

  $scope.reverseMessage = function(message) {
    Reverse.message(message, function(result) {
      $scope.newReversedMessage = result;
    });
  }

  
}

module.exports = reverse;