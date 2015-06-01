var app = angular.module('MyModule', ['ngRoute']);

/* you have to inject $compileProvider and replace app's compileProvider by $compileProvider -- add by marks.chan.l@gmail.com */
app.config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/Home.html',
        controller: 'HomeController'
    });

    app.compileProvider = $compileProvider;

}]);
