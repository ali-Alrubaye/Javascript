var EmApp = EmApp || {};
EmApp.users = [{ user: 'User1', usersName: 'Ali', password: 'Ali' },
                   { user: 'User2', usersName: 'Aveen', password: 'Aveen' },
                   { user: 'User3', usersName: 'Dj', password: 'Dj' },
                   { user: 'User4', usersName: 'Jul', password: 'Jul' },
                   { user: 'User5', usersName: 'My', password: 'My' }];

var App = angular.module('App', []);
App.factory('userFactory', function () {
    
    var factory = {};
    factory.getUsers = function () {
        return EmApp.users;
    };


    factory.setUserData = function (user) {
        EmApp.users.push(user);
    };


    return factory;
});

App.controller('userCtrl', function ($scope, userFactory, $q) {
    $scope.users = userFactory.getUsers();
    $scope.Remember = false;
     $scope.test2 = function() {
         var c = {};
         angular.forEach(EmApp.users, function (value, key) {
             if (value.usersName == $scope.newUser && value.password == $scope.newPass) {
                 c = value;
             }
         });
         var deferred = $q.defer();
         var promise = deferred.promise;
         promise.then(function (c) {
             $scope.status2 = 'Success pass 1 - ' + c;
             //userFactory.setUserData({ user: $scope.newU, usersName: $scope.newUser, password: $scope.newPass });
             return c + 'hussa! ';
         }, function (reason) {
             $scope.status2 = 'failure pass 1';
             return reason;
         })
         .then(function (c) {
             alert('Success: ' + c);
         }, function (reason) {
             alert('Error: ' + reason);
         });
         if (angular.equals(c, {}))
             deferred.reject('The combination of user and password did not match. Please try again!');
         else
             deferred.resolve('logged in”');
     };
    if ($scope.Remember) {
        
    }
});