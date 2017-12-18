angular.module('demoRoleApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {
    $urlRouterProvider.otherwise('login')

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'src/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        parent: 'base',
        url: '/login',
        templateUrl: 'src/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('responsible', {
        parent: 'base',
        url: '/responsible',
        templateUrl: 'src/admin/admin.html',
        controller: 'AdminCtrl',
        data: {
          authorizedRoles: [USER_ROLES.manager, USER_ROLES.responsible]
        }
      })
      .state('children', {
        parent: 'base',
        url: '/children',
        templateUrl: 'src/children/children.html',
        controller: 'AdminCtrl',
        data: {
          authorizedRoles: [USER_ROLES.manager, USER_ROLES.responsible, USER_ROLES.children]
        }
      })
  })
