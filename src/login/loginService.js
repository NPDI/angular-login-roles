angular.module('demoRoleApp')
  .factory('loginFactory', ['$http', '$q',
    function ($http, $q) {
      var loginFactory = {}
      $http.defaults.useXDomain = true

      loginFactory.login = function (user) {
        var deferred = $q.defer()

        deferred.resolve(user)

        $http({
          method: 'POST',
          url: 'www.dulval.tech:8092/login',
          data: {
            user: user
          }

        }).success(function (data) {
          defer.resolve(data)
        }).error(function (err) {
          deferred.reject(err)
        })

        return deferred.promise
      }

      return loginFactory
    }
  ])
