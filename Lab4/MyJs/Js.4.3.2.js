/// <reference path="C:\Users\Ali\Source\Repos\Javascript\Lab4\Content/angular.min.js" />

var app = angular.module("myModule", []).controller("myController", function($scope) {
    var students = [
        {name: 'student 1', firstName: "Ali", lastName: "Al-Rubaye", ort: "Helsingborg", Tel: 011121201 
        },
        { name: 'student 2', firstName: "Aveen", lastName: "Al-Gaff", ort: "Helsingborg", Tel: 112200112 
        },
        {name: 'student 3', firstName: "Dj", lastName: "Sonson", ort: "Malmö", Tel: 3322112201 
        }
    ];
    $scope.students = students;
});