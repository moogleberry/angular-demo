// declaration of the main app module, and the main app's dependencies
// note that feature modules like page1 and page2 are dependencies
angular.module('app', [
		'ngRoute',
		'bindingDemo',
		'toolsDemo',
		'directivesDemo',
		'servicesDemo',
		'inheritanceDemo',
		'ui.grid'
	])
	
	// the config block declares values and settings that need to be set before the site runs
	// e.g. routes, crypto settings, etc
	// not all angular objects are created yet when the config block runs
	.config(['$routeProvider',
		function ($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'app/home/home.html'
			})
			.when('/bindingDemo', {
				templateUrl: 'app/bindingDemo/bindingDemo.html',
				controller: 'bindingDemoController'
			})
			.when('/toolsDemo', {
				templateUrl: 'app/toolsDemo/toolsDemo.html',
				controller: 'toolsDemoController'
			})
			.when('/directivesDemo', {
				templateUrl: 'app/directivesDemo/directivesDemo.html',
				controller: 'directivesDemoController'
			})
			.when('/servicesDemo', {
				templateUrl: 'app/servicesDemo/servicesDemo.html',
				controller: 'servicesDemoController'
			})
			.when('/inheritanceDemo', {
				templateUrl: 'app/inheritanceDemo/inheritanceDemo.html',
				controller: 'inheritanceDemoController'
			})
			.otherwise({
				redirectTo: '/home'
			})
		;
	}])

	// the run block will execute before the rest of the application
	.run(['$rootScope', function ($rootScope) {
		
		//nothing here

	}])

	// a controller like any other; this one is accessible by the whole app via inheritance
	.controller('indexController', ['$scope', function ($scope) {

		// nothing here

	}])
;