angular.module('demoRoleApp')
  .controller('MainCtrl',
    ['$scope', '$rootScope', '$location', 'USER_ROLES', 'AuthService',
      function ($scope, $rootScope, $location, USER_ROLES, AuthService) {
        $scope.currentUser = null
        $scope.isAuthorized = AuthService.isAuthorized

        $scope.setUser = function (user) {
          var p = null
          if (user.role == 'superAdmin') {
            user.roleCode = USER_ROLES.superAdmin
            p = 'admin'
          }else if (user.role == 'admin') {
            user.roleCode = USER_ROLES.admin
            p = 'admin'
          }else if (user.role == 'children') {
            user.roleCode = USER_ROLES.children
            p = 'children'
          }

          if (p !== null) {
            p = '/' + p

            user.id = parseInt(Math.random() * 1000)

            $scope.currentUser = user
            $rootScope.currentUser = user
            AuthService.newSession(user)

            $location.path(p)
          }else
            alert('Unable to Log You In :(')
        }
      }])
