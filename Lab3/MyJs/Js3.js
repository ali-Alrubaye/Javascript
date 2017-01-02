window.onload = function () {
    var per = [{
        firstName: "Ali", lastName: "Al-Rubaye", age: 37,
        fullNames: function () {
            return this.firstName + " " + this.lastName;
        }
    },
    {
        firstName: "Aveen", lastName: "Al-Gaff", age: 35,
        fullNames: function () {
            return this.firstName + " " + this.lastName;
        }
    }];
    document.getElementById("button").onclick = function() {
        for (var i = 0; i < per.length; i++) {
            document.getElementById("t").innerHTML += "Full Name: " + per[i].fullNames() + "<br>";
        };
    };

    //function persons(firstName, lastName, age) {
    //    this.firstName = firstName;
    //    this.lastName = lastName;
    //    this.age = age;
    //    this.fullName = fullNames;

    //};
    //function fullNames() {
    //    var result = this.firstName + " " + this.lastName;
    //    return result;
    //};
    //var p = new persons("Ali", "Al-Rubaye", 37);
    //var p2 = new persons("Aveen", "Al-Gagg", 35);
    //document.getElementById("button").onclick = function () {
    //    document.getElementById("t").innerHTML = p.firstName.prototype +" " + p.fullName();
    //}
    //console.log(p2.fullName());

};