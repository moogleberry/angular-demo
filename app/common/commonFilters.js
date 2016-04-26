angular.module('app')

// a filter to turn an input into a number; useful for passing to smart-table
.filter('ToNumber', function() {
	return function(value) {
		return Number(value);
	};
})

;