angular.module('app')

// an example of getting external data
.service('TestGet', function($http) {
	this.get = function() {
		return $http.get('assets/data/data.json')
			.then(function(response) {
				//resolve the promise as the returned data (i.e. not the whole get response)
				return response.data;
			})
		;
	};
})

;
