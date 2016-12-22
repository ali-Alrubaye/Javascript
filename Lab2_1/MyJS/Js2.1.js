var person = [ 1, "Ali", "Aveen", "Bo", "Dj", 5 ],
    value,
    i;
document.getElementById('output2').style.backgroundColor = 'yellow';
for (i = 0; i < person.length; i++) {
    value = person[i];
    if (typeof value === 'string') {
        document.getElementById("output1").innerHTML += value + ' ';
    } else if (typeof value === 'number') { document.getElementById("output2").innerHTML = 'Siffor hittades i Arrayn. Dessa har ej skrivits ut.';
        }
}