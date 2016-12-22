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
    
    var Per = function(anvandare, forName, efterName, tel, stad, alder) {
        this.Anvandare = anvandare;
        this.Forname = forName;
        this.Efternamn = efterName;
        this.Telnummer = tel;
        this.Stad = stad;
        this.Alder = alder;
    };
  
    var persons = new Per(myAnvandare.value, myForname.value, myEfternamn.value, myTelnu.value, myStad.value, myAge.value
    );
    //for (var j in persons) {
    //    if (persons.hasOwnProperty(j)) {
    //        document.getElementById("gg").innerHTML +=j + persons[j]+ "<br/>";
    //    }
    //};
    console.log(persons);
   //document.getElementById("gg").innerHTML = persons.Anvandare.value + persons.Forname + persons.Efternamn + persons.Telnummer + persons.Stad + persons.Alder + " ";

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

        setInterval(function () {
            myTextarea.style.visibility = "visible";
        }, 3000);
  for (var j in persons) {
                if (persons.hasOwnProperty(j)) {
                    document.getElementById("gg").innerHTML += j + persons[j] + "<br/>";
                }
            };
        if (!myAge.value.match(/[a-zA-Z]+/) && myAge.value > 1 && myAge.value < 100) {
            // myTextarea.style.visibility = "visible";
          

            myTextarea.style.backgroundColor = "#90EE90";
            myTextarea.innerHTML += myAnvandare.value;
            myTextarea.innerHTML += myForname.value;
            myTextarea.innerHTML += myEfternamn.value;
            myTextarea.innerHTML += myTelnu.value;
            myTextarea.innerHTML += myStad.value;
            myTextarea.innerHTML += myAge.value;


        } else {
            myFDiv.style.backgroundColor = "red";
            myFDiv.style.visibility = "visible";
            myFDiv.style.fontSize = "22px";

        }
    }
};

// var getElement = document.getElementById("gg");
//     var i;
//     var item = document.getElementsByTagName("input")

//     for(i=0; i < item.length; i = i + 1) {
//        getElement.innerHTML += item[i].type +"<br>";
//     }