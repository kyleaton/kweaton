require('angular');
require('angular-route/angular-route');
require('angular-resource/angular-resource');
require('angular-bootstrap');



angular.module('kweaton', ['ngRoute', 'ngResource', 'ui.bootstrap'])
	.controller({'MainCtrl':require('./controllers/main.js')})
	.directive('headerDirective', require('./directives/header.js'))
	.directive('aboutDirective', require('./directives/about.js'))
	.directive('introDirective', require('./directives/intro.js'))
	.config(['$routeProvider', '$locationProvider', require('./routes/routes.js')])

