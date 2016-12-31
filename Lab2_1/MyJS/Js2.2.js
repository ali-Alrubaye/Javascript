window.onload = function () {
    var myInput = document.getElementById("gropInput"),
        myAnvandare = document.getElementById("user").focus(),
        myForname = document.getElementById("fName"),
        myEfternamn = document.getElementById("lName"),
        myTelnu = document.getElementById("tel"),
        myStad = document.getElementById("stad"),
        myAge = document.getElementById("age"),
        myFDiv = document.getElementById("divFel"),
        myTextarea = document.getElementById("show"),
        myButton = document.getElementById("button");
    myFDiv.style.visibility = "hidden";
    myTextarea.style.visibility = "hidden";
    var itemForm = document.forms[0];
    myButton.onclick = function () {
        if (!myAge.value.match(/[a-zA-Z]+/) && myAge.value >= 10 && myAge.value < 100) {
            myTextarea.style.visibility = "visible";
            setTimeout(function () {
                myTextarea.style.visibility = "hidden";
            }, 5000);
            myTextarea.style.backgroundColor = "#90EE90";
            var i;
            for (i = 0; i < itemForm.length; i = i + 1) {
                if (itemForm[i].getAttribute("placeholder") != null) {
                    myTextarea.innerHTML += itemForm[i].getAttribute("placeholder") + ": " + itemForm[i].value + "\n";
                }
            }
        } else {
            myFDiv.style.backgroundColor = "red";
            myFDiv.style.visibility = "visible";
            myFDiv.style.fontSize = "22px";
            myFDiv.innerHTML = "Du måste skriva nummer mellan 10-100 i ålder fältet";
            setTimeout(function () {
                myFDiv.style.visibility = "hidden";
            }, 5000);
        }
    }
    //var Person = function (anvandare, forName, efterName, tel, stad, alder) {
    //    var newPerson = {};
    //    newPerson.Anvandare = anvandare;
    //    newPerson.Forname = forName;
    //    newPerson.Efternamn = efterName;
    //    newPerson.Telnummer = tel;
    //    newPerson.Stad = stad;
    //    newPerson.Alder = alder;
    //    return newPerson;
    //};
    var p = [
        {
            user: "Ali",
            fName: "Ali",
            lNamn: "Al-Rubaye",
            tel: "01234567",
            stad: "Helsingbog",
            age: 37
        },
        {
            user: "Aveen",
            fName: "Aveen",
            lNamn: "Al-Gaff",
            tel: "01234567",
            stad: "Helsingbog",
            age: 35
        },
        {
            user: "Dj",
            fName: "Dj",
            lNamn: "Jacksson",
            tel: "01234567",
            stad: "Malmö",
            age: 40
        }
    ];
    document.getElementById("buttonAdd").onclick = function () {
        "use strict";
        var userTarg = itemForm.firstElementChild.firstElementChild.value;
        for (var i in p) {
            if (p.hasOwnProperty(i)) {
                if (userTarg === p[i].user) {
                    var re = p[i];
                    myForname.value = re.fName;
                    myEfternamn.value = re.lNamn;
                    myTelnu.value = re.tel;
                    myStad.value = re.stad;
                    myAge.value = re.age;
                    //                    var ou = document.forms[0];
                    //                    var ouu = ou.getElementsByTagName("input");
                    //                    for (i = 0; i < ouu.length; i = i + 1) {
                    //                        var ouuu = ouu[i].getAttribute("id");
                    //                        //var jj = document.getElementById(ouuu);
                    //                        if (re.hasOwnProperty(ouuu)) {
                    //                            //console.log(re.hasOwnProperty(ouuu));
                    //                           var v= document.getElementById(ouuu).setAttribute("value",re.value);
                    //                            //console.log(jj);
                    //                            //if (ouuu===re.prototype) { 
                    //                            //  jj.value = re;
                    //                          console.log(v);
                    //                        //}
                    //}
                    //                    }
                }
                else {
                    myFDiv.style.visibility = "visible";
                    myFDiv.innerHTML = "användaren ej hittas";
                    setTimeout(function () {
                        myFDiv.style.visibility = "hidden";
                    }, 5000);
                }

            }
        }

    }

    //function inputId() {
    //    var listId = {};
    //    var ou = document.forms[0];
    //    var inputField = ou.getElementsByTagName("input");
    //    for (var y = 0; y < inputField.length; y = y + 1) {
    //        var myId = inputField[y].getAttribute("id");
    //        if (myId !==null) {
    //            listId = myId;
    //        }
    //    }
    //}

};