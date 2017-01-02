var myApp = myApp || {};
window.onload = function () {
    
    myApp.per = [{
        firstName: "Ali", lastName: "Al-Rubaye", age: 37,
        fullNames: function () {
            return this.firstName + " " + this.lastName; }},
        { firstName: "Aveen", lastName: "Al-Gaff", age: 35,
       fullNames: function () {
           return this.firstName + " " + this.lastName;}}];
    document.getElementById("button").onclick = function () {
        for (var i = 0; i < myApp.per.length; i++) {
            document.getElementById("t").innerHTML += "Full Name: " + myApp.per[i].fullNames() + "<br>";
        };
    };
};