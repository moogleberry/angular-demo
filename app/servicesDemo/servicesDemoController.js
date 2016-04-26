angular.module('servicesDemo', [])

.controller('servicesDemoController', function ($scope, $http, TestGet) {
	// service call to get external data
	TestGet.get().then(function(data) {
		$scope.items = data;
	}, function() {
		//http error case
	});
})

;