/// <reference path="C:\Users\Ali\Source\Repos\Javascript\Lab4\Content/angular.min.js" />

var app = angular.module("myModule", [])
    .controller("myController", function ($scope) {
    var biler = [
        "Volvo XC90 - Modell 2014", "Volvo XC90 - Modell 2015",
        "Volvo XC90 - Modell 2016", "Volvo XC90 - Modell 2017",
        "Volvo XC90 - Modell 2018", "Volvo XC90 - Modell 2019",
        "Volvo XC90 - Modell 2013", "Volvo XC90 - Modell 2012"
    ];
    $scope.biler = biler;
});
