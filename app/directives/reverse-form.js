var reverseForm = function(Reverse, $location) {
  return {
    restrict : 'E',
    template: '<div class="message">' +
                '<h2 class="message-text">Skriv in en mening som skall översättas</h2>' +
                '<div class="message-input">' +
                  '<form ng-submit="submit()">' +
                    '<input class="message-input__input" ng-focus type="text" ng-model="message" ng-keyup="reverseMessage(message)" name="text" autocomplete="off" />' +
                    '<input class="message-input__button" type="submit" id="submit" value="ÖVERSÄTT" />' +
                  '</form>' +
                '</div>' +
                '<div class="message-result">' +
                  '<h2 ng-bind="reversedMessage"></h2>' + 
                '</div>' +
              '</div>',

    link: function(scope) {
      scope.message = '';
  
      scope.submit = function() {
          var message = scope.message;
          $location.path('/reverse/' + message.replace(/ /g, '-'));
      }

      scope.reverseMessage = function(message) {
        Reverse.message(message, function(result) {
          scope.reversedMessage = result;
        });
      }
    }
  };
}

module.exports = reverseForm;