angular.module('demoRoleApp')
  .controller('LoginCtrl',
    ['$scope', 'loginFactory',
      function ($scope, loginFactory) {
        $scope.user = {}
        $scope.user.role = 'superAdmin'

        $scope.login = function (user) {
          loginFactory.login($scope.user)
            .then(function (good) {
              $scope.setUser(good)
            })
        }
      }])
