var App = angular.module("myApp", []);

//Angular Factory

App.factory("utbildningFactory", function () {

    var utbildningar = [ { name: "EC" },
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

