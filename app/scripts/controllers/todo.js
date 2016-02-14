'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the firstAppApp
 */

var todo = angular.module('todo',[]);
    todo.controller('TodoCtrl', function ($scope, localStorageService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    
        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function () {
            localStorageService.set('todos', $scope.todos);
        }, true);

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

    });