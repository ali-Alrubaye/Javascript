var App = angular.module("myApp", []);

//Angular Factory

App.factory("utbildningFactory", function () {

    var utbildningar = [{ name: "EC" },
                        { name: "Ingenjör" },
                        { name: "Ekonom" },
                        { name: "Lärare" },
                        { name: "IT" }];

    var persons = [
        { name: "Ali", status: false, utbildning: "EC" },
        { name: "Han", status: true, utbildning: "EC" },
        { name: "Kaka", status: true, utbildning: "EC" },
        { name: "Aveen", status: false, utbildning: "Ingenjör" },
        { name: "My", status: true, utbildning: "Ingenjör" },
        { name: "Bo", status: true, utbildning: "Ingenjör" },
        { name: "Dj", status: false, utbildning: "Ekonom" },
        { name: "Tom", status: true, utbildning: "Ekonom" },
        { name: "Bakr", status: true, utbildning: "Ekonom" },
        { name: "Elin", status: false, utbildning: "Lärare" },
        { name: "Tony", status: true, utbildning: "Lärare" },
        { name: "Andy", status: true, utbildning: "Lärare" },
        { name: "Jueal", status: false, utbildning: "IT" },
        { name: "Tomat", status: true, utbildning: "IT" },
        { name: "Eran", status: true, utbildning: "IT" }
    ];

    var factory = {};

    factory.getPersons = function () {
        return persons;
    };

    factory.getUtbildningar = function () {
        return utbildningar;
    };

    return factory;
});
// Controller
App.controller('Ctrl', function ($scope, utbildningFactory) {

    $scope.persons = utbildningFactory.getPersons();
    $scope.utbildningar = utbildningFactory.getUtbildningar();
});


//var App = angular.module('App', ['ngMaterial'])
//.controller('SelectAsyncController', function ($timeout, $scope) {
//    $scope.user = null;
//    $scope.users = null;

//    $scope.loadUsers = function () {

//        // Use timeout to simulate a 650ms request.
//        return $timeout(function () {

//            $scope.users = $scope.users || [
//              { id: 1, name: 'Scooby Doo' },
//              { id: 2, name: 'Shaggy Rodgers' },
//              { id: 3, name: 'Fred Jones' },
//              { id: 4, name: 'Daphne Blake' },
//              { id: 5, name: 'Velma Dinkley' }
//            ];

//        }, 650);
//    };
//});