var myApp = myApp || {};
 myApp.per = [{
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

    $.each(myApp.per, function(key, value) {
        $("#unsortedList1").hide().append("<li>" + value.fullNames() + "</li>");
        
    });
$(document).ready(function () {
   
        $("li:even").css({
            backgroundColor: "#00bfff",
            color:"#FFF"
   
    });
    $("#fIn").on("click", function() {
        $("#unsortedList1").fadeIn();
    });
    $("#fOut").on("click", function () {
        $("#unsortedList1").fadeOut();
    });
});