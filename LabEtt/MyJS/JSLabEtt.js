
    function myFunction() {
        var result = document.getElementById("Användare").value;

        if (result == "") {
            alert("Du Måste Skriva Användare Name");
            return fals;
        }
        document.getElementById("grop").style.visibility = "hidden";
        document.getElementById("color").style.backgroundColor = "green";

        document.getElementById("demo").innerHTML = "Tack " + result + " vi har fåt det Mail";
    }

    function ChangeMeClick1() {
        document.getElementById("Paragraph1").style.color = "#ff0000";
    }
    function ChangeMeClick2() {
        document.getElementById("Paragraph2").style.color = "green";
        document.getElementById("Paragraph3").style.color = "yellow";
    }
