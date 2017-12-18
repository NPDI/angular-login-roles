angular.module('demoRoleApp')
  .controller('LoginCtrl',
    ['$scope', 'loginFactory',
      function ($scope, loginFactory) {
        $scope.user = {}
        
        $scope.login = function (user) {

          loginFactory.login($scope.user)
            .then(function (res) {
              $scope.setUser(res)
            })
        }
      }])
