angular.module('app')

.directive('testDirective', function() {
	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		templateUrl: 'app/templates/testDirective.tpl.html',
		controller: function($scope) {
			$scope.dataList = [];

			$scope.addItem = function(data) {
				$scope.dataList.push(data);
			}
		}
	};
})

;