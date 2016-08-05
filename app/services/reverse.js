'use strict';

var reverse = function($http) {
  return {
    message: function(message, callback) {
      $http({
          method: 'POST',
          url: 'http://localhost:3000/reverse/',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data:'message=' + message
      }).then(function success(response) {
          callback(response.data);
          }, function error(response) {
          console.log(response);
      });
    }
  };
}

module.exports = reverse;