'use strict';

var list = function ($http, config) {
  return {
    get: function (callback) {
      $http({
          method: 'GET',
          url: config.apiBaseUrl + '/list/'
      }).then(function success (response) {
          callback(response.data);
          }, function error (response) {
          console.log(response);
      });
    }
  };
}

module.exports = list;