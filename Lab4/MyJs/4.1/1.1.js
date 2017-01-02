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

myEmployee.p1 = new myEmployee.persons('Ali', 'Al-Rubaye', 37, 'Helsingborg', 'BMV');
myEmployee.p2 = new myEmployee.persons('Aveen', 'Al-Gaff', 35, 'Helsingborg', 'Mercedes');
myEmployee.pGrop = [myEmployee.p1, myEmployee.p2];
var result='';
$('button#Emp').on('click', function () {
    $.each( myEmployee.pGrop ,function(key,value){ 
        console.log(value.getEInfo());
        result += value.getEInfo()+ '  <br> ' ;
        $('div#divEmp').html(result  );
        
    });
});


var myCar = myCar || {};
myCar.Car = function (name, model, speed, color) {
    this.name = name;
    this.model = model;
    this.speed = speed;
    this.color = color;
    this.getInfo = getInfo;
};

function getInfo() {
    return this.name + ' ' + this.model + ' ' + this.speed + ' ' + this.color;
};

myCar.car1 = new myCar.Car('BMW', 2016, 300, 'White');
myCar.car2 = new myCar.Car('Toyota', 2015, 220, 'Black');

myCar.cars = [myCar.car1, myCar.car2, new myCar.Car('Mercedes', 2013, 250, 'Grey')];
var c = '';
$('button#car').on('click', function () {
for (var i = 0; i < myCar.cars.length; i++) {
    c += myCar.cars[i].getInfo()+ '<br>';
    $('div#car').html(c)
};
})
