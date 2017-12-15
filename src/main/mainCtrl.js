angular.module('demoRoleApp')
  .controller('MainCtrl',
    ['$scope', '$rootScope', '$location', 'USER_ROLES', 'AuthService',
      function ($scope, $rootScope, $location, USER_ROLES, AuthService) {
        $scope.currentUser = null
        $scope.isAuthorized = AuthService.isAuthorized

        $scope.setUser = function (user) {
          var p = null

          //console.log(user)
          if (user.type === 1) {
            user.roleCode = USER_ROLES.superAdmin
            p = 'admin'
          }else if (user.type === 2) {
            user.roleCode = USER_ROLES.admin
            p = 'responsible'
          }else if (user.type === 3) {
            user.roleCode = USER_ROLES.children
            p = 'children'
          }

          if (p !== null) {
            p = '/' + p

            $scope.currentUser = user
            $rootScope.currentUser = user

            AuthService.newSession(user)
            $location.path(p)

          }else
            alert('Unable to Log You In :(')
        }
      }])
