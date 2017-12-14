angular.module('demoRoleApp')
  .run(function ($rootScope, $state, $http, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if (next.name !== 'login') {
        var authorizedRoles = next.data.authorizedRoles

        if (!AuthService.isAuthorized(authorizedRoles)) {
          event.preventDefault()

          if (AuthService.isAuthenticated())
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized)
          else
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated)

          $state.go('login')
          alert('Access Denied')
        }
      } else if (next.name == 'admin' && AuthService.isAdmin())
        $state.go('admin')
    })
  })

angular.module('demoRoleApp')
  .constant('USER_ROLES', {
    all: '*',
    superAdmin: 'superAdmin',
    admin: 'admin',
    children: 'children'
  })
