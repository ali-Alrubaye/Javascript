var App = angular.module('App', []);
  App.factory('filmFactory',function () {
    var Film = [{ title: 'title1', date: 1937 },
                { title: 'title2', date: 1937 },
                { title: 'title3', date: 1999 },
                { title: 'title4', date: 2000 },
                { title: 'title5', date: 2001 },
                { title: 'title6', date: 2002 },
                { title: 'title7', date: 2003 },
                { title: 'title8', date: 2004 },
                { title: 'title9', date: 2005 },
                { title: 'title10', date: 2006 }];

    var factory = {};
    factory.getFilm = function () {
        return Film;
    }
 
return factory;
});
var controllers = {};
App.controller('filmsController', function($scope, filmFactory) {
    $scope.Film = filmFactory.getFilm();
});

App.factory('userFactory',function(){
       var Users = [{ users: 'User1', usersName: 'Ali', password: 'Ali' },
                    { users: 'User2', usersName: 'Aveen', password: 'Aveen' },
                    { users: 'User3', usersName: 'Dj', password: 'Dj' },
                    { users: 'User4', usersName: 'Jul', password: 'Jul' },
                    { users: 'User5', usersName: 'My', password: 'My' } ];
    var factory = {};
    factory.getUsers = function () {
        return Users;
    }
    return factory;
});
App.controller('usersController', function($scope, userFactory) {
    $scope.Users = userFactory.getUsers();
});

