var translated = function($scope, Translate, $routeParams, $location) {
  $scope.message = $routeParams.message.replace(/-/g, " ")

  Translate.reverse($scope.message, function(result) {
    $scope.reversedMessage = result;
  });
  
  $scope.submit = function() {
      var message = $scope.newMessage;
      $location.path('/reverse/' + message.replace(/ /g, '-'));
  }

  $scope.reverseMessage = function(message) {
    Translate.reverse(message, function(result) {
      $scope.newReversedMessage = result;
    });
  }

  $scope.relatedItems = [
    {
      'message' : 'Skriv en bok som alla läser',
      'url' : '/reverse/skriv-en-bok-som-alla-läser'
    },
    {
      'message' : 'Sy upp en kollektion med kläder',
      'url' : '/reverse/sy-upp-en-kollektion-med-kläder'
    },
    {
      'message' : 'Säg ett ord som blir bevingat',
      'url' : '/reverse/säg-ett-ord-som-blir-bevingat'
    },
    {
      'message' : 'Sätt en flagga på en topp',
      'url' : '/reverse/sätt-en-flagga-på-en-topp'
    },
    {
      'message' : 'Korsa apor med kaniner',
      'url' : '/reverse/korsa-apor-med-kaniner'
    },
    {
      'message' : 'Få ett pris ur kungens hand',
      'url' : '/reverse/få-ett-pris-ur-kungens-hand'
    },
    {
      'message' : 'Vi kommer alltid att leva',
      'url' : '/reverse/vi-kommer-alltid-att-leva'
    },
    {
      'message' : 'Vi kommer aldrig att dö',
      'url' : '/reverse/vi-kommer-aldrig-att-dö'
    }
  ];
}

module.exports = translated;