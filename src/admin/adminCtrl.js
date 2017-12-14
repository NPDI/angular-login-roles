angular.module('demoRoleApp')
  .controller('AdminCtrl',
    ['$scope',
      function ($scope) {
        $scope.user = $scope.$parent.currentUser
      }])
