window.onload = function () {

    var myInput = document.getElementById("gropInput"),
        myAnvandare = document.getElementById("Anvandare"),
        myForname = document.getElementById("Forname"),
        myEfternamn = document.getElementById("Efternamn"),
        myTelnu = document.getElementById("Telnummer"),
        myStad = document.getElementById("Stad"),
        myAge = document.getElementById("Alder"),
        myFDiv = document.getElementById("divFel"),
        myTextarea = document.getElementById("show"),
        myButton = document.getElementById("button");
       
        myFDiv.style.visibility = "hidden";
        myTextarea.style.visibility = "hidden";
  
     var  value,
            i;
    
    // var Person = function (anvandare, forName, efterName, tel, stad, alder) {
    //     var newPerson = {};
    //    newPerson.Anvandare = anvandare;
    //    newPerson.Forname = forName;
    //    newPerson.Efternamn = efterName;
    //    newPerson.Telnummer = tel;
    //    newPerson.Stad = stad;
    //    newPerson.Alder = alder;

    //    return newPerson;
    //};
  
    // var p = new Person(myAnvandare.value, myForname.value, myEfternamn.value, myTelnu.value, myStad.value, myAge.value
    //);
  
    // //console.log(Person.value);
    // //document.getElementById("gg").innerHTML = Person.Anvandare.value + Person.Forname + Person.Efternamn + Person.Telnummer + Person.Stad + Person.Alder + " ";
    // document.getElementById("gg").innerHTML = p.Anvandare + p.Forname + p.Efternamn + p.Telnummer + p.Stad + p.Alder + " ";
    // console.log(p.Anvandare + p.Forname + p.Efternamn + p.Telnummer + p.Stad + p.Alder + " ")
   //console.log(person);
    //for (i = 0; i < persons.length; i++) {
    //    value = persons[i];
        
    //    document.getElementById("gg").innerHTML = value.Anvandare.value + value.Forname + value.Efternamn + value.Telnummer + value.Stad + value.Alder + " ";
    //}


    //       var listPerson ={}, p=[];
    //             listPerson.Anvandare=myAnvandare.value;
    //             listPerson.Forname=myForname.value;
    //             listPerson.Efternamn=myEfternamn.value;
    //             listPerson.Telnummer=myTelnu.value;
    //             listPerson.Stad=myStad.value;
    //             listPerson.Alder=myAge.value;
    // p.push({listPerson: listPerson});
    // console.log(persons);
 

    myButton.onclick = function () {

        //setTimeout(function () {
        //    myTextarea.style.visibility = "visible";
        //}, 5000);


        if (!myAge.value.match(/[a-zA-Z]+/) && myAge.value > 1 && myAge.value < 100) {
             myTextarea.style.visibility = "visible";
          
            setTimeout(function () {
                myTextarea.style.visibility = "hidden";
            }, 5000);
            myTextarea.style.backgroundColor = "#90EE90";
            myTextarea.innerHTML += myAnvandare.value;
            myTextarea.innerHTML += myForname.value;
            myTextarea.innerHTML += myEfternamn.value;
            myTextarea.innerHTML += myTelnu.value;
            myTextarea.innerHTML += myStad.value;
            myTextarea.innerHTML += myAge.value;

            var getElement = document.getElementById("gg");
            var i;
            var item = document.getElementsByTagName("input")

            for (i = 0; i < item.length; i = i + 1) {
                getElement.innerHTML += item[i].value + "<br>";
            }

        } else {
            myFDiv.style.backgroundColor = "red";
            myFDiv.style.visibility = "visible";
            myFDiv.style.fontSize = "22px";

        }
    }
};

