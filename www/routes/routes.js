var fs = require('fs');
module.exports = function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', {template: fs.readFileSync(__dirname+'/../views/about.html', 'utf8'), controller: 'MainCtrl'}).
		when('/test', {template: fs.readFileSync(__dirname+'/../views/test.html', 'utf8'), controller: 'MainCtrl'}).
		when('/foo', {template: fs.readFileSync(__dirname+'/../views/foo.html', 'utf8'), controller: 'MainCtrl'});
	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('!');
}