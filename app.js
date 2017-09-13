var sportList = angular.module('sportList', []);

sportList.controller('sportController', function($scope, $http) {
	$scope.sortType     = 'rank';
	$scope.sortReverse  = false;
  $scope.filterPlay = { };

  $http({
    method : "GET",
    url : "sportList.json"
  }).then(function appSuccess(response) {
  		$scope.sports = response.data;
    }, function appError(response) {
      	console.log(response.statusText);
  });
});



        