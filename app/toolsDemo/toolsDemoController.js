angular.module('toolsDemo', [])

.controller('toolsDemoController', function ($scope) {
	$scope.showItem = true;
	// service call to get external data
	$scope.tableData = [
		{"name": "a", "value": "1"},
		{"name": "b", "value": "2"},
		{"name": "c", "value": "3"}
	]
})

;