var myEmployee = myEmployee || {};
myEmployee.persons = function (firstName, lastName, age, address, car) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.car = car;
    this.getEInfo = getEInfo;
};
function getEInfo() {
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' ' + this.address + ' ' + this.car;
};

myEmployee.p1 = new myEmployee.persons('Ali', 'Al-Rubaye', 37, 'Helsingborg', 'true');
myEmployee.p2 = new myEmployee.persons('Aveen', 'Al-Gaff', 35, 'Helsingborg', 'false');
myEmployee.pGrop = [myEmployee.p1, myEmployee.p2];


$(document).ready(function () {
    'use strict';
    doWork(1).then(function () {
        alert("Awesome.. inside success method");
    }, function () {
        alert("Totally unawesome ... Inside Fail method");
    }).always(function () {
        alert("Work is done now wheter good or bad");
    });

});

function doWork(num) {
    var dfd = $.Deferred();
    var result = '';
   $.each(myEmployee.pGrop, function (key, value) {
        result += value.getEInfo() + '  <br> ';
        
    
    if (result.car === 1) {
        //alert("Awesome... will resolve the promise");
        $('div#divEmp').html(result);
        dfd.resolve();
    } else {
        //alert("Totally unawesome ... will reject the promise");
        $('div#divEmp').html('reject ' +result);

        dfd.reject();
    }

    return dfd.promise();
   });
}