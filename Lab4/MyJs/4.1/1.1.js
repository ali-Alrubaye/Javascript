function person(firstName, lastName, age, address, car) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.Car = car;
};

function Car(name, model, speed, color) {
    this.name = name;
    this.model = model;
    this.speed = speed;
    this.color = color;
    this.getInfo = getInfo;
};

function getInfo() {
    return this.name + ' ' + this.model + ' ' + this.speed + ' ' + this.color;
}
var car1 = new Car('BMW', 2016, 300, 'White');
var car2 = new Car('Toyota', 2015, 220, 'Black');

var cars = [car1, car2, new Car('Mercedes', 2013, 250, 'Grey')];
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i].getInfo());
}