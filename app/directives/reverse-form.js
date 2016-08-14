'use strict';

var reverseForm = function(Reverse, $location) {
  return {
    restrict : 'E',
    templateUrl: '/views/templates/reverse-form.html',

    link: function (scope) {
      scope.message = '';
  
      scope.submit = function () {
          var message = scope.message;
          $location.path('/reverse/' + message.replace(/ /g, '-'));
      }

      scope.reverseMessage = function (message) {
        Reverse.message(message, function (result) {
          scope.reversedMessage = result;
        });
      }
    }
  };
}

module.exports = reverseForm;
