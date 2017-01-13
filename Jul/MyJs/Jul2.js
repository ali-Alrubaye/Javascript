var App = angular.module('App', []);
App.factory('userFactory', function() {
    var users = [{ user: 'User1', usersName: 'Ali', password: 'Ali' },
                   { user: 'User2', usersName: 'Aveen', password: 'Aveen' },
                   { user: 'User3', usersName: 'Dj', password: 'Dj' },
                   { user: 'User4', usersName: 'Jul', password: 'Jul' },
                   { user: 'User5', usersName: 'My', password: 'My' }];
    var factory = {};
    factory.getUsers = function() {
        return users;
    };

    //factory.setUserData = function (user) {
    //    users.push(user);
    //};
  factory.validationFactory=function (logUser,logPass ) {

        'use strict';
        var bool = false;
        var c = '';
        $('button#btnEmp').on('click', function () {
            $.each(users, function (key, value) {

                if (value.user ===logUser && value.password===logPass) {
                    c += value.name + '<br>';
                    bool = true;
                }
            });
            doWork(bool).then(function () {
                $('div#divEmp').html(c);
            }, function () {
                //alert("Totally unawesome ... Inside Fail method");
            }).always(function () {
                alert("bearbetning klar!");
            });


        });

        function doWork(bool) {
            var dfd = $.Deferred();
            if (bool) {

                dfd.resolve();
            } else {

                dfd.reject();
            }
            return dfd.promise();
        }

    };
    return factory;
});

App.controller('userCtrl', function($scope, userFactory) {
    $scope.users = userFactory.getUsers();
    $scope.addUsers = function() {
        userFactory.setUserData({ usersName: $scope.newUser, password: $scope.newPass, user: $scope.newU });
    }
});

