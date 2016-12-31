window.onload = function () {
    var inputForm = document.getElementById("submit");
    inputForm.onclick = function() {
        var result = document.getElementById("Användare").value;
        //var letters = /^[a-zA-Z]+$/;
        if (result !== "" ) {
            document.getElementById("demo").innerHTML = "Tack " + result + " vi har fåt det Mail";
            document.getElementById("grop").style.visibility = "hidden";
            document.getElementById("color").style.backgroundColor = "green";
            
        } else {
            alert("Du Måste Skriva Användare Name");
        }
    };
    
   

    
    document.getElementById("button2").onclick = function() {
        document.getElementById("Paragraph1").style.color = "#ff0000";

    }
    document.getElementById("button3").onclick = function () {
        document.getElementById("Paragraph2").style.color = "green";
        document.getElementById("Paragraph3").style.color = "yellow";
    }
};