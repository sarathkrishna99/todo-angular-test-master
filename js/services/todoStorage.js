/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
*/
todomvc.factory('todoStorage', function () {xx
	var STORAGE_ID = 'todos-angularjs-perf';

	return {
		get: function () {
			var app = angular.module('plunker', ['firebase']);

			app.controller('MainCtrl', function($scope, angularFire) {
			  $scope.name = 'World';

			  $scope.images = angularFireCollection('https://datauri.firebaseio-demo.com/images/');

			});
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});
