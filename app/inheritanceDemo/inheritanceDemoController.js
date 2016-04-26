angular.module('inheritanceDemo', [])

.controller('inheritanceDemoController', function ($scope) {
	$scope.myLiteral = "0";
	
	$scope.myObject = {"value": "0"};

	$scope.tableData = [
		{"name": "a", "value": "1"},
		{"name": "b", "value": "2"},
		{"name": "c", "value": "3"}
	]
})

;