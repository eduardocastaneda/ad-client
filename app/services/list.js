var list = function($http) {
  return {
    get: function(callback) {
      $http({
          method: 'GET',
          url: 'http://localhost:3000/list/'
      }).then(function success(response) {
          callback(response.data);
          }, function error(response) {
          console.log(response);
      });
    }
  };
}

module.exports = list;