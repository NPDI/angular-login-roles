angular.module('demoRoleApp')
  .controller('MainCtrl',
    ['$scope', '$rootScope', '$location', 'USER_ROLES', 'AuthService',
      function ($scope, $rootScope, $location, USER_ROLES, AuthService) {
        $scope.currentUser = null
        $scope.isAuthorized = AuthService.isAuthorized

        $scope.setUser = function (user) {
          var redirect = null

          if (user.type === 1) {
            user.roleCode = USER_ROLES.manager
            redirect = 'responsible'
          }else if (user.type === 2) {
            user.roleCode = USER_ROLES.responsible
            redirect = 'responsible'
          }else if (user.type === 3) {
            user.roleCode = USER_ROLES.children
            redirect = 'children'
          }

          if (redirect !== null) {
            redirect = '/' + redirect

            $scope.currentUser = user
            $rootScope.currentUser = user

            AuthService.newSession(user)
            $location.path(redirect)

          }else
            alert('Unable to Log You In :(')
        }
      }])
