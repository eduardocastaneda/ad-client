var translate = function($http) {
  return {
    reverse: function(text, callback) {
      $http({
          method: 'GET',
          url: 'http://localhost:3000/reverse/test test 123',
          dataType: 'jsonp'
      }).then(function successCallback(response) {
          if(callback) callback();
          console.log(response);
          }, function errorCallback(response) {
          console.log(response);
      });
    }
  };
}


module.exports = translate;