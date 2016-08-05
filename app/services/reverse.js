'use strict';

var reverse = function($http, config) {
  return {
    message: function(message, callback) {
      $http({
          method: 'POST',
          url: config.apiBaseUrl + '/reverse/',
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