var translate = function($http) {
  return {
    reverse: function(text, callback) {
      $http({
          method: 'POST',
          url: 'http://localhost:3000/reverse/',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data:'message=' + text
      }).then(function successCallback(response) {
          if(callback) callback(response.data);
          }, function errorCallback(response) {
          console.log(response);
      });
    }
  };
}


module.exports = translate;